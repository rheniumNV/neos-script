import { member, Member, Component } from "../../../core";
    
    export interface TextureCharacterControllerModifierInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Parameter?: member<any>;
ModificationMode?: member<any>;
MinValue?: member<number>;
MaxValue?: member<number>;
Channel?: member<any>;
Texture?: member<any>;
    }
    
    export function TextureCharacterControllerModifier(props: TextureCharacterControllerModifierInput){
      const { id, persistentId, updateOrder, Enabled,
Parameter,
ModificationMode,
MinValue,
MaxValue,
Channel,
Texture, } = props;
    
      return (
        <Component type="FrooxEngine.TextureCharacterControllerModifier" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CharacterControllerParameter]`} name="Parameter" id={typeof Parameter === "object" && "id" in Parameter ? Parameter?.id : undefined} value={typeof Parameter === "object" && "value" in Parameter ? Parameter?.value : Parameter} /* default: MaximumTractionSlope */  isRaw={typeof Parameter === "object" && "isRaw" in Parameter && Parameter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CharacterControllerModifier+Mode]`} name="ModificationMode" id={typeof ModificationMode === "object" && "id" in ModificationMode ? ModificationMode?.id : undefined} value={typeof ModificationMode === "object" && "value" in ModificationMode ? ModificationMode?.value : ModificationMode} /* default: Override */  isRaw={typeof ModificationMode === "object" && "isRaw" in ModificationMode && ModificationMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinValue" id={typeof MinValue === "object" && "id" in MinValue ? MinValue?.id : undefined} value={typeof MinValue === "object" && "value" in MinValue ? MinValue?.value : MinValue} /* default: 0 */  isRaw={typeof MinValue === "object" && "isRaw" in MinValue && MinValue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxValue" id={typeof MaxValue === "object" && "id" in MaxValue ? MaxValue?.id : undefined} value={typeof MaxValue === "object" && "value" in MaxValue ? MaxValue?.value : MaxValue} /* default: 0 */  isRaw={typeof MaxValue === "object" && "isRaw" in MaxValue && MaxValue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.ColorChannel]`} name="Channel" id={typeof Channel === "object" && "id" in Channel ? Channel?.id : undefined} value={typeof Channel === "object" && "value" in Channel ? Channel?.value : Channel} /* default: R */  isRaw={typeof Channel === "object" && "isRaw" in Channel && Channel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Texture2D]`} name="Texture" id={typeof Texture === "object" && "id" in Texture ? Texture?.id : undefined} value={typeof Texture === "object" && "value" in Texture ? Texture?.value : Texture} /* default: ID0 */  isRaw={typeof Texture === "object" && "isRaw" in Texture && Texture.isRaw ? true : undefined} />
        </Component>
      );
    };
    