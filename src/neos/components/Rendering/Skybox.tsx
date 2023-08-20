import { member, Member, Component } from "../../core";
    
    export interface SkyboxInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Material?: member<any>;
    }
    
    export function Skybox(props: SkyboxInput){
      const { id, persistentId, updateOrder, Enabled,
Material, } = props;
    
      return (
        <Component type="FrooxEngine.Skybox" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`} name="Material" id={typeof Material === "object" && "id" in Material ? Material?.id : undefined} value={typeof Material === "object" && "value" in Material ? Material?.value : Material} /* default: ID0 */  isRaw={typeof Material === "object" && "isRaw" in Material && Material.isRaw ? true : undefined} />
        </Component>
      );
    };
    