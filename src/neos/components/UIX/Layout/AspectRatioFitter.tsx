import { member, Member, Component } from "../../../core";
    
    export interface AspectRatioFitterInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AspectRatio?: member<number>;
    }
    
    export function AspectRatioFitter(props: AspectRatioFitterInput){
      const { id, persistentId, updateOrder, Enabled,
AspectRatio, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.AspectRatioFitter" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AspectRatio" id={typeof AspectRatio === "object" && "id" in AspectRatio ? AspectRatio?.id : undefined} value={typeof AspectRatio === "object" && "value" in AspectRatio ? AspectRatio?.value : AspectRatio} /* default: 0 */  />
        </Component>
      );
    };
    