import { useState, useEffect } from 'react';
import { ChangeChainDropdown } from './chain-dropdown';
import {
  ChooseChainInfo,
  ChainOption,
  handleSelectChainDropdown
} from '../types';

export function ChooseChain({
  chainName,
  chainInfos,
  onChange
}: {
  chainName?: string;
  chainInfos: ChooseChainInfo[];
  onChange: handleSelectChainDropdown;
}) {
  const [selectedItem, setSelectedItem] = useState<ChainOption | undefined>();
  
  // Specify the chains you want to include
  const allowedChains = ['Akash', 'Canto', 'Chihuahua', 'Comdex', 'e-Money', 'Evmos', 'Gravity Bridge', 'Juno', 'OmniFlix', 'Osmosis', 'Stride', 'Dig Chain'];
  
  // Filter the chains
const filteredChains = chainInfos.filter(chainInfo => allowedChains.includes(chainInfo.label));

  useEffect(() => {
    if (chainName && filteredChains.length > 0)
      setSelectedItem(
        filteredChains.filter((options) => options.chainName === chainName)[0]
      );
    if (!chainName) setSelectedItem(undefined);
  }, [filteredChains, chainName]);

  return (
    <ChangeChainDropdown
      data={filteredChains}
      selectedItem={selectedItem}
      onChange={onChange}
    />
  );
}
