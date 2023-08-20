import { member, Member, Component } from "../../core";
    
    export interface WorldTextRendererWizardInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Root?: member<any>;
Material?: member<any>;
Font?: member<any>;
ProcessDisabled?: member<boolean>;
ProcessStandaloneRenderers?: member<boolean>;
ProcessUIXRenderers?: member<boolean>;
Color?: member<[number, number, number, number]>;
_tag?: member<any>;
    }
    
    export function WorldTextRendererWizard(props: WorldTextRendererWizardInput){
      const { id, persistentId, updateOrder, Enabled,
Root,
Material,
Font,
ProcessDisabled,
ProcessStandaloneRenderers,
ProcessUIXRenderers,
Color,
_tag, } = props;
    
      return (
        <Component type="FrooxEngine.WorldTextRendererWizard" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Root" id={typeof Root === "object" && "id" in Root ? Root?.id : undefined} value={typeof Root === "object" && "value" in Root ? Root?.value : Root} /* default: ID0 */  isRaw={typeof Root === "object" && "isRaw" in Root && Root.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`} name="Material" id={typeof Material === "object" && "id" in Material ? Material?.id : undefined} value={typeof Material === "object" && "value" in Material ? Material?.value : Material} /* default: ID0 */  isRaw={typeof Material === "object" && "isRaw" in Material && Material.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.FontSet]`} name="Font" id={typeof Font === "object" && "id" in Font ? Font?.id : undefined} value={typeof Font === "object" && "value" in Font ? Font?.value : Font} /* default: ID0 */  isRaw={typeof Font === "object" && "isRaw" in Font && Font.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ProcessDisabled" id={typeof ProcessDisabled === "object" && "id" in ProcessDisabled ? ProcessDisabled?.id : undefined} value={typeof ProcessDisabled === "object" && "value" in ProcessDisabled ? ProcessDisabled?.value : ProcessDisabled} /* default: false */  isRaw={typeof ProcessDisabled === "object" && "isRaw" in ProcessDisabled && ProcessDisabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ProcessStandaloneRenderers" id={typeof ProcessStandaloneRenderers === "object" && "id" in ProcessStandaloneRenderers ? ProcessStandaloneRenderers?.id : undefined} value={typeof ProcessStandaloneRenderers === "object" && "value" in ProcessStandaloneRenderers ? ProcessStandaloneRenderers?.value : ProcessStandaloneRenderers} /* default: false */  isRaw={typeof ProcessStandaloneRenderers === "object" && "isRaw" in ProcessStandaloneRenderers && ProcessStandaloneRenderers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ProcessUIXRenderers" id={typeof ProcessUIXRenderers === "object" && "id" in ProcessUIXRenderers ? ProcessUIXRenderers?.id : undefined} value={typeof ProcessUIXRenderers === "object" && "value" in ProcessUIXRenderers ? ProcessUIXRenderers?.value : ProcessUIXRenderers} /* default: false */  isRaw={typeof ProcessUIXRenderers === "object" && "isRaw" in ProcessUIXRenderers && ProcessUIXRenderers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  isRaw={typeof Color === "object" && "isRaw" in Color && Color.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_tag" id={typeof _tag === "object" && "id" in _tag ? _tag?.id : undefined} value={typeof _tag === "object" && "value" in _tag ? _tag?.value : _tag} /* default: ID0 */  isRaw={typeof _tag === "object" && "isRaw" in _tag && _tag.isRaw ? true : undefined} />
        </Component>
      );
    };
    