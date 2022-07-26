import { BNBStaked } from "../generated/schema";
import { STAKED } from "../generated/Staking/StakingContract";
export function handleStaking(event: STAKED):void {
  let transfer = BNBStaked.load(event.transaction.hash.toHex());
  if (transfer == null) {
    transfer = new BNBStaked(event.transaction.hash.toHex());
  }
  transfer.amountStaked = event.params.amount;
  transfer.stakerAddress = event.params.staker.toString();
  transfer.save();
}
