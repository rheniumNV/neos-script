import { member, Member, Component } from "../../core";
    
    export interface RenderTextureProviderInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Size?: member<[number, number]>;
Depth?: member<number>;
FilterMode?: member<any>;
AnisotropicLevel?: member<number>;
WrapModeU?: member<any>;
WrapModeV?: member<any>;
    }
    
    export function RenderTextureProvider(props: RenderTextureProviderInput){
      const { id, persistentId, updateOrder, Enabled,
Size,
Depth,
FilterMode,
AnisotropicLevel,
WrapModeU,
WrapModeV, } = props;
    
      return (
        <Component type="FrooxEngine.RenderTextureProvider" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.int2]`} name="Size" id={typeof Size === "object" && "id" in Size ? Size?.id : undefined} value={typeof Size === "object" && "value" in Size ? Size?.value : Size} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Depth" id={typeof Depth === "object" && "id" in Depth ? Depth?.id : undefined} value={typeof Depth === "object" && "value" in Depth ? Depth?.value : Depth} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.TextureFilterMode]`} name="FilterMode" id={typeof FilterMode === "object" && "id" in FilterMode ? FilterMode?.id : undefined} value={typeof FilterMode === "object" && "value" in FilterMode ? FilterMode?.value : FilterMode} /* default: Point */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="AnisotropicLevel" id={typeof AnisotropicLevel === "object" && "id" in AnisotropicLevel ? AnisotropicLevel?.id : undefined} value={typeof AnisotropicLevel === "object" && "value" in AnisotropicLevel ? AnisotropicLevel?.value : AnisotropicLevel} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.TextureWrapMode]`} name="WrapModeU" id={typeof WrapModeU === "object" && "id" in WrapModeU ? WrapModeU?.id : undefined} value={typeof WrapModeU === "object" && "value" in WrapModeU ? WrapModeU?.value : WrapModeU} /* default: Repeat */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.TextureWrapMode]`} name="WrapModeV" id={typeof WrapModeV === "object" && "id" in WrapModeV ? WrapModeV?.id : undefined} value={typeof WrapModeV === "object" && "value" in WrapModeV ? WrapModeV?.value : WrapModeV} /* default: Repeat */  />
        </Component>
      );
    };
    