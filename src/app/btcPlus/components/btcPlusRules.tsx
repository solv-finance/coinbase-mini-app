import { Card, Flex } from "@radix-ui/themes";

const BtcPlusRule = () => {
  return (
    <Flex className="flex-col gap-4">
      <Card className="w-full !p-6 ">
        <div className="text-[24px] font-MatterSQ-Medium mb-4">
          Redemption Schedule
        </div>
        <div className="h-[auto] flex-1 font-MatterSQ-Regular text-sm">
          <p>Withdrawal requests will be processed three times monthly.</p>
          <ul className="!my-4 list-inside !list-disc">
            {[
              "Requests submitted from the 1st to 9th → Processed on the 20th",
              "Requests submitted from the 10th to 19th → Processed at the end of the month",
              "Requests submitted from the 20th to the end of the month → Processed on the 10th of the following month"
            ].map((item) => (
              <li key={item} className="pl-[1.25rem] indent-[-20px]">
                {item}
              </li>
            ))}
          </ul>
          <p>
            If a processing date falls on a weekend, it shifts to the next
            business day.
          </p>
        </div>
      </Card>
      <Card className="w-full !p-6">
        <div className="text-[24px] font-MatterSQ-Medium mb-4">Risk</div>
        <div className="h-[auto] flex-1 font-MatterSQ-Regular text-sm">
           <p>
            BTC+ invests in vaults that deposit into DeFi and CeFi products,
            exposing users to smart contract vulnerabilities, third-party
            protocol exploits, counterparty and insolvency risks, market
            volatility, and operational dependencies.
          </p>
          <p>
            While Solv employs institutional-grade security, multi-layer audits,
            and real-time monitoring to mitigate these risks, losses can still
            occur. Users must independently evaluate suitability before
            investing.
          </p>
        </div>
      </Card>
    </Flex>
  );
};

export default BtcPlusRule;
