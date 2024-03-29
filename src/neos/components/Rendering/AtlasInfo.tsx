import { member, Member, Component } from "../../core";
    
    export interface AtlasInfoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
GridSize?: member<[number, number]>;
GridFrames?: member<number>;
    }
    
    export function AtlasInfo(props: AtlasInfoInput){
      const { id, persistentId, updateOrder, Enabled,
GridSize,
GridFrames, } = props;
    
      return (
        <Component type="FrooxEngine.AtlasInfo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.int2]`} name="GridSize" id={typeof GridSize === "object" && "id" in GridSize ? GridSize?.id : undefined} value={typeof GridSize === "object" && "value" in GridSize ? GridSize?.value : GridSize} /* default: [0; 0] */  isRaw={typeof GridSize === "object" && "isRaw" in GridSize && GridSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="GridFrames" id={typeof GridFrames === "object" && "id" in GridFrames ? GridFrames?.id : undefined} value={typeof GridFrames === "object" && "value" in GridFrames ? GridFrames?.value : GridFrames} /* default: 0 */  isRaw={typeof GridFrames === "object" && "isRaw" in GridFrames && GridFrames.isRaw ? true : undefined} />
        </Component>
      );
    };
    