"use client";

import { useEffect, useState, useRef } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

import { Button, Popover } from "@radix-ui/themes";
import { sdk } from "@farcaster/miniapp-sdk";
import { formatAddress } from "@/lib";
import { ChevronDownIcon } from "@radix-ui/react-icons";

interface UserInfo {
  user: {
    displayName?: string;
  };
}

export const ConnectWallet = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const hasAutoConnectedRef = useRef(false);
  const getInfo = async () => {
    const info: UserInfo = await sdk.context;
    setUserInfo(info);
    return info;
  };

  useEffect(() => {
    getInfo();
  }, []);

  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  // 只在首次挂载时自动连接一次
  useEffect(() => {
    if (
      !hasAutoConnectedRef.current &&
      !isConnected &&
      connectors &&
      connectors[0]
    ) {
      hasAutoConnectedRef.current = true;
      connect({ connector: connectors[0] });
    }
  }, [connect, connectors, isConnected]);

  return (
    <div>
      {isConnected ? (
        <div className="flex items-center gap-2">
          <div className="border border-solid border-gray-500 rounded-full text-[12px] px-2 py-1 flex items-center gap-1">
            <span>{address ? formatAddress(address, 6, 4) : "--"}</span>
          </div>
        </div>
      ) : (
        <>
          {connectors && connect && (
            <div
              className="bg-transparent rounded-2xl border border-solid border-gray-500 px-2 py-1 flex items-center"
              onClick={() => connect({ connector: connectors[0] })}
            >
              <span className="font-MatterSQ-Regular !text-[12px]">
                Connect Wallet
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};
