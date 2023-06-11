import { member, Member, Component } from "../../../../core";
    
    export interface AvatarExpressionDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
DataSource?: member<any>;
StrengthMultiplier?: member<number>;
VolumeSource?: member<any>;
SilenceSource?: member<any>;
ExpressionDrivers?: member<any>;
    }
    
    export function AvatarExpressionDriver(props: AvatarExpressionDriverInput){
      const { id, persistentId, updateOrder, Enabled,
DataSource,
StrengthMultiplier,
VolumeSource,
SilenceSource,
ExpressionDrivers, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarExpressionDriver" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IMouthTrackingSourceComponent]`} name="DataSource" id={typeof DataSource === "object" && "id" in DataSource ? DataSource?.id : undefined} value={typeof DataSource === "object" && "value" in DataSource ? DataSource?.value : DataSource} /* default: ID0 */  isRaw={typeof DataSource === "object" && "isRaw" in DataSource && DataSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StrengthMultiplier" id={typeof StrengthMultiplier === "object" && "id" in StrengthMultiplier ? StrengthMultiplier?.id : undefined} value={typeof StrengthMultiplier === "object" && "value" in StrengthMultiplier ? StrengthMultiplier?.value : StrengthMultiplier} /* default: 0 */  isRaw={typeof StrengthMultiplier === "object" && "isRaw" in StrengthMultiplier && StrengthMultiplier.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.Single]]`} name="VolumeSource" id={typeof VolumeSource === "object" && "id" in VolumeSource ? VolumeSource?.id : undefined} value={typeof VolumeSource === "object" && "value" in VolumeSource ? VolumeSource?.value : VolumeSource} /* default: ID0 */  isRaw={typeof VolumeSource === "object" && "isRaw" in VolumeSource && VolumeSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.Single]]`} name="SilenceSource" id={typeof SilenceSource === "object" && "id" in SilenceSource ? SilenceSource?.id : undefined} value={typeof SilenceSource === "object" && "value" in SilenceSource ? SilenceSource?.value : SilenceSource} /* default: ID0 */  isRaw={typeof SilenceSource === "object" && "isRaw" in SilenceSource && SilenceSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.CommonAvatar.AvatarExpressionDriver+ExpressionDriver]`} name="ExpressionDrivers" id={typeof ExpressionDrivers === "object" && "id" in ExpressionDrivers ? ExpressionDrivers?.id : undefined} value={typeof ExpressionDrivers === "object" && "value" in ExpressionDrivers ? ExpressionDrivers?.value : ExpressionDrivers} /* default: FrooxEngine.SyncList`1[FrooxEngine.CommonAvatar.AvatarExpressionDriver+ExpressionDriver] */  isRaw={typeof ExpressionDrivers === "object" && "isRaw" in ExpressionDrivers && ExpressionDrivers.isRaw ? true : undefined} />
        </Component>
      );
    };
    