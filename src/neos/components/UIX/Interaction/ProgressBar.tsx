import { member, Member, Component } from "../../../core";
    
    export interface ProgressBarInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Progress?: member<number>;
AnchorMinOffset?: member<[number, number]>;
AnchorMaxOffset?: member<[number, number]>;
AnchorMin?: member<any>;
AnchorMax?: member<any>;
Power?: member<number>;
    }
    
    export function ProgressBar(props: ProgressBarInput){
      const { id, persistentId, updateOrder, Enabled,
Progress,
AnchorMinOffset,
AnchorMaxOffset,
AnchorMin,
AnchorMax,
Power, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.ProgressBar" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Progress" id={typeof Progress === "object" && "id" in Progress ? Progress?.id : undefined} value={typeof Progress === "object" && "value" in Progress ? Progress?.value : Progress} /* default: 0 */  isRaw={typeof Progress === "object" && "isRaw" in Progress && Progress.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="AnchorMinOffset" id={typeof AnchorMinOffset === "object" && "id" in AnchorMinOffset ? AnchorMinOffset?.id : undefined} value={typeof AnchorMinOffset === "object" && "value" in AnchorMinOffset ? AnchorMinOffset?.value : AnchorMinOffset} /* default: [0; 0] */  isRaw={typeof AnchorMinOffset === "object" && "isRaw" in AnchorMinOffset && AnchorMinOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="AnchorMaxOffset" id={typeof AnchorMaxOffset === "object" && "id" in AnchorMaxOffset ? AnchorMaxOffset?.id : undefined} value={typeof AnchorMaxOffset === "object" && "value" in AnchorMaxOffset ? AnchorMaxOffset?.value : AnchorMaxOffset} /* default: [0; 0] */  isRaw={typeof AnchorMaxOffset === "object" && "isRaw" in AnchorMaxOffset && AnchorMaxOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="AnchorMin" id={typeof AnchorMin === "object" && "id" in AnchorMin ? AnchorMin?.id : undefined} value={typeof AnchorMin === "object" && "value" in AnchorMin ? AnchorMin?.value : AnchorMin} /* default: ID0 */  isRaw={typeof AnchorMin === "object" && "isRaw" in AnchorMin && AnchorMin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="AnchorMax" id={typeof AnchorMax === "object" && "id" in AnchorMax ? AnchorMax?.id : undefined} value={typeof AnchorMax === "object" && "value" in AnchorMax ? AnchorMax?.value : AnchorMax} /* default: ID0 */  isRaw={typeof AnchorMax === "object" && "isRaw" in AnchorMax && AnchorMax.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Power" id={typeof Power === "object" && "id" in Power ? Power?.id : undefined} value={typeof Power === "object" && "value" in Power ? Power?.value : Power} /* default: 0 */  isRaw={typeof Power === "object" && "isRaw" in Power && Power.isRaw ? true : undefined} />
        </Component>
      );
    };
    