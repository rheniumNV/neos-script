import { member, Member, Component } from "../../../core";
    
    export interface SphereAlignerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AutoAddChildren?: member<boolean>;
Radius?: member<number>;
DistributionOffset?: member<number>;
AlignToNormal?: member<boolean>;
RotationOffset?: member<any>;
NormalizedStart?: member<number>;
NormalizedEnd?: member<number>;
HorizontalStart?: member<number>;
HorizontalEnd?: member<number>;
Items?: member<any>;
    }
    
    export function SphereAligner(props: SphereAlignerInput){
      const { id, persistentId, updateOrder, Enabled,
AutoAddChildren,
Radius,
DistributionOffset,
AlignToNormal,
RotationOffset,
NormalizedStart,
NormalizedEnd,
HorizontalStart,
HorizontalEnd,
Items, } = props;
    
      return (
        <Component type="FrooxEngine.SphereAligner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoAddChildren" id={typeof AutoAddChildren === "object" && "id" in AutoAddChildren ? AutoAddChildren?.id : undefined} value={typeof AutoAddChildren === "object" && "value" in AutoAddChildren ? AutoAddChildren?.value : AutoAddChildren} /* default: false */  isRaw={typeof AutoAddChildren === "object" && "isRaw" in AutoAddChildren && AutoAddChildren.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  isRaw={typeof Radius === "object" && "isRaw" in Radius && Radius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DistributionOffset" id={typeof DistributionOffset === "object" && "id" in DistributionOffset ? DistributionOffset?.id : undefined} value={typeof DistributionOffset === "object" && "value" in DistributionOffset ? DistributionOffset?.value : DistributionOffset} /* default: 0 */  isRaw={typeof DistributionOffset === "object" && "isRaw" in DistributionOffset && DistributionOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AlignToNormal" id={typeof AlignToNormal === "object" && "id" in AlignToNormal ? AlignToNormal?.id : undefined} value={typeof AlignToNormal === "object" && "value" in AlignToNormal ? AlignToNormal?.value : AlignToNormal} /* default: false */  isRaw={typeof AlignToNormal === "object" && "isRaw" in AlignToNormal && AlignToNormal.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="RotationOffset" id={typeof RotationOffset === "object" && "id" in RotationOffset ? RotationOffset?.id : undefined} value={typeof RotationOffset === "object" && "value" in RotationOffset ? RotationOffset?.value : RotationOffset} /* default: [0; 0; 0; 1] */  isRaw={typeof RotationOffset === "object" && "isRaw" in RotationOffset && RotationOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalizedStart" id={typeof NormalizedStart === "object" && "id" in NormalizedStart ? NormalizedStart?.id : undefined} value={typeof NormalizedStart === "object" && "value" in NormalizedStart ? NormalizedStart?.value : NormalizedStart} /* default: 0 */  isRaw={typeof NormalizedStart === "object" && "isRaw" in NormalizedStart && NormalizedStart.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalizedEnd" id={typeof NormalizedEnd === "object" && "id" in NormalizedEnd ? NormalizedEnd?.id : undefined} value={typeof NormalizedEnd === "object" && "value" in NormalizedEnd ? NormalizedEnd?.value : NormalizedEnd} /* default: 0 */  isRaw={typeof NormalizedEnd === "object" && "isRaw" in NormalizedEnd && NormalizedEnd.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HorizontalStart" id={typeof HorizontalStart === "object" && "id" in HorizontalStart ? HorizontalStart?.id : undefined} value={typeof HorizontalStart === "object" && "value" in HorizontalStart ? HorizontalStart?.value : HorizontalStart} /* default: 0 */  isRaw={typeof HorizontalStart === "object" && "isRaw" in HorizontalStart && HorizontalStart.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HorizontalEnd" id={typeof HorizontalEnd === "object" && "id" in HorizontalEnd ? HorizontalEnd?.id : undefined} value={typeof HorizontalEnd === "object" && "value" in HorizontalEnd ? HorizontalEnd?.value : HorizontalEnd} /* default: 0 */  isRaw={typeof HorizontalEnd === "object" && "isRaw" in HorizontalEnd && HorizontalEnd.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.SphereAligner+Item]`} name="Items" id={typeof Items === "object" && "id" in Items ? Items?.id : undefined} value={typeof Items === "object" && "value" in Items ? Items?.value : Items} /* default: FrooxEngine.SyncList`1[FrooxEngine.SphereAligner+Item] */  isRaw={typeof Items === "object" && "isRaw" in Items && Items.isRaw ? true : undefined} />
        </Component>
      );
    };
    