import { member, Member, Component } from "../../core";
    
    export interface GlueVisualizerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Material?: member<any>;
Glue?: member<any>;
Scale?: member<any>;
BaseScale?: member<[number, number, number]>;
    }
    
    export function GlueVisualizer(props: GlueVisualizerInput){
      const { id, persistentId, updateOrder, Enabled,
Material,
Glue,
Scale,
BaseScale, } = props;
    
      return (
        <Component type="FrooxEngine.GlueVisualizer" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.FresnelMaterial]`} name="Material" id={typeof Material === "object" && "id" in Material ? Material?.id : undefined} value={typeof Material === "object" && "value" in Material ? Material?.value : Material} /* default: ID0 */  isRaw={typeof Material === "object" && "isRaw" in Material && Material.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Glue]`} name="Glue" id={typeof Glue === "object" && "id" in Glue ? Glue?.id : undefined} value={typeof Glue === "object" && "value" in Glue ? Glue?.value : Glue} /* default: ID0 */  isRaw={typeof Glue === "object" && "isRaw" in Glue && Glue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldHook\`1[BaseX.float3]`} name="Scale" id={typeof Scale === "object" && "id" in Scale ? Scale?.id : undefined} value={typeof Scale === "object" && "value" in Scale ? Scale?.value : Scale} /* default: ID0 */  isRaw={typeof Scale === "object" && "isRaw" in Scale && Scale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="BaseScale" id={typeof BaseScale === "object" && "id" in BaseScale ? BaseScale?.id : undefined} value={typeof BaseScale === "object" && "value" in BaseScale ? BaseScale?.value : BaseScale} /* default: [0; 0; 0] */  isRaw={typeof BaseScale === "object" && "isRaw" in BaseScale && BaseScale.isRaw ? true : undefined} />
        </Component>
      );
    };
    