import { member, Member, Component } from "../../../core";
    
    export interface ArcLayoutInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Arc?: member<number>;
Offset?: member<number>;
Separation?: member<number>;
CenterAtSeparation?: member<boolean>;
ProportionalSize?: member<boolean>;
ItemDirection?: member<any>;
    }
    
    export function ArcLayout(props: ArcLayoutInput){
      const { id, persistentId, updateOrder, Enabled,
Arc,
Offset,
Separation,
CenterAtSeparation,
ProportionalSize,
ItemDirection, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.ArcLayout" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Arc" id={typeof Arc === "object" && "id" in Arc ? Arc?.id : undefined} value={typeof Arc === "object" && "value" in Arc ? Arc?.value : Arc} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Offset" id={typeof Offset === "object" && "id" in Offset ? Offset?.id : undefined} value={typeof Offset === "object" && "value" in Offset ? Offset?.value : Offset} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Separation" id={typeof Separation === "object" && "id" in Separation ? Separation?.id : undefined} value={typeof Separation === "object" && "value" in Separation ? Separation?.value : Separation} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CenterAtSeparation" id={typeof CenterAtSeparation === "object" && "id" in CenterAtSeparation ? CenterAtSeparation?.id : undefined} value={typeof CenterAtSeparation === "object" && "value" in CenterAtSeparation ? CenterAtSeparation?.value : CenterAtSeparation} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ProportionalSize" id={typeof ProportionalSize === "object" && "id" in ProportionalSize ? ProportionalSize?.id : undefined} value={typeof ProportionalSize === "object" && "value" in ProportionalSize ? ProportionalSize?.value : ProportionalSize} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.ArcLayout+Direction]`} name="ItemDirection" id={typeof ItemDirection === "object" && "id" in ItemDirection ? ItemDirection?.id : undefined} value={typeof ItemDirection === "object" && "value" in ItemDirection ? ItemDirection?.value : ItemDirection} /* default: Clockwise */  />
        </Component>
      );
    };
    