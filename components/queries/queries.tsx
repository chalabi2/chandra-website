import axios from "axios";

const networks = [
  {
    name: "akt",
    baseURL: "https://nodes.chandrastation.com/api/akash/",
    valoperAddress: "akashvaloper1lxh0u07haj646pt9e0l2l4qc3d8htfx5kk698d",
    decimal: 6,
  },
  {
    name: "canto",
    baseURL: "https://nodes.chandrastation.com/api/canto/",
    valoperAddress: "cantovaloper19e84kdf5z09u2v4gpv0m7r6dcu0p8llkf30qtv",
    decimal: 18,
  },
  {
    name: "huahua",
    baseURL: "https://nodes.chandrastation.com/api/huahua/",
    valoperAddress: "chihuahuavaloper1lxh0u07haj646pt9e0l2l4qc3d8htfx5pd5hur",
    decimal: 6,
  },

  {
    name: "evmos",
    baseURL: "https://evmos-api.polkachu.com",
    valoperAddress: "evmosvaloper18zt355ccyxd3kj23mz5hdz00qqn5lk5kjnj74m",
    decimal: 18,
  },
  {
    name: "grav",
    baseURL: "https://nodes.chandrastation.com/api/gravity/",
    valoperAddress: "gravityvaloper1728s3k0mgzmc38eswpu9seghl0yczupyhc695s",
    decimal: 6,
  },
  {
    name: "juno",
    baseURL: "https://nodes.chandrastation.com/api/juno/",
    valoperAddress: "junovaloper106y6thy7gphzrsqq443hl69vfdvntgz260uxlc",
    decimal: 6,
  },
  {
    name: "flix",
    baseURL: "https://omniflix-api.polkachu.com/",
    valoperAddress: "omniflixvaloper1dv3v662kd3pp6pxfagck4zyysas82adskl0zjd",
    decimal: 6,
  },
  {
    name: "osmo",
    baseURL: "https://osmosis-api.polkachu.com",
    valoperAddress: "osmovaloper10ymws40tepmjcu3a2wuy266ddna4ktas0zuzm4",
    decimal: 6,
  },
  {
    name: "saga",
    baseURL: "https://nodes.chandrastation.com/api/saga",
    valoperAddress: "sagavaloper106y6thy7gphzrsqq443hl69vfdvntgz2rcxrw2",
    decimal: 6,
  },
  {
    name: "qck",
    baseURL: "https://nodes.chandrastation.com/api/quicksilver",
    valoperAddress: "quickvaloper106y6thy7gphzrsqq443hl69vfdvntgz2xfhd5x",
    decimal: 6,
  },
];

export async function getDelegators() {
  const requests = networks.map(({ baseURL, valoperAddress, name }) => {
    return axios
      .get(
        `${baseURL}/cosmos/staking/v1beta1/validators/${valoperAddress}/delegations`
      )
      .catch((error) => {
        console.error(`${name} request for stakers failed with: ${error}`);

        return { data: { pagination: { total: 0 } } };
      });
  });

  const responses = await Promise.all(requests);

  const total = responses.reduce((sum, response) => {
    return sum + Number(response.data.pagination.total);
  }, 0);
  return Intl.NumberFormat("en-US").format(total);
}

async function getUptime() {
  const request = await axios.get("");
}

export async function getTvl() {
  const requests = networks.map(
    ({ baseURL, valoperAddress, name, decimal }) => {
      return axios
        .get(`${baseURL}/cosmos/staking/v1beta1/validators/${valoperAddress}`)
        .then((response) => ({
          name,
          tokens:
            BigInt(response.data.validator.tokens) /
            BigInt(Math.pow(10, decimal)),
        }))
        .catch((error) => {
          console.error(
            `${name} request for tokens staked failed with: ${error}`
          );
          return { name, tokens: 0 };
        });
    }
  );

  const responses = await Promise.all(requests);
  console.log(responses);
  const tokensByNetwork = responses.reduce(
    (acc: Record<string, number>, { name, tokens }) => {
      acc[name] = Number(tokens);
      return acc;
    },
    {}
  );

  const valueRequests = networks.map(({ name }) => {
    if (name === "canto") {
      const cantoPrice = 0.1623;
      return Promise.resolve({
        name,
        value: tokensByNetwork[name] * cantoPrice,
      });
    }
    return axios
      .get(`https://api-osmosis.imperator.co/tokens/v2/price/${name}`)
      .then((response) => ({
        name,
        value: tokensByNetwork[name] * response.data.price,
      }))
      .catch((error) => {
        console.error(`Failed to get price for ${name} with error: ${error}`);
        return { name, value: 0 };
      });
  });

  const valueResponses = await Promise.all(valueRequests);

  const totalValue = valueResponses.reduce((acc, { value }) => {
    return acc + value;
  }, 0);
  console.log(totalValue, valueRequests);
  return Intl.NumberFormat("en-US").format(totalValue);
}
