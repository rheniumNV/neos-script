import { member, Member, Component } from "../../../core";
    
    export interface ValueOptionDescriptionDriver_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Value?: member<any>;
ForceDeselected?: member<boolean>;
Label?: member<string>;
Color?: member<any>;
Sprite?: member<any>;
SpriteURL?: member<any>;
SpriteTint?: member<any>;
DefaultOption?: member<any>;
SpriteTintBase?: member<[number, number, number, number]>;
    }
    
    export function ValueOptionDescriptionDriver_T(props: ValueOptionDescriptionDriver_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
Value,
ForceDeselected,
Label,
Color,
Sprite,
SpriteURL,
SpriteTint,
DefaultOption,
SpriteTintBase, } = props;
    
      return (
        <Component type={`FrooxEngine.ValueOptionDescriptionDriver\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[${T}]]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: null */  isRaw={typeof Value === "object" && "isRaw" in Value && Value.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ForceDeselected" id={typeof ForceDeselected === "object" && "id" in ForceDeselected ? ForceDeselected?.id : undefined} value={typeof ForceDeselected === "object" && "value" in ForceDeselected ? ForceDeselected?.value : ForceDeselected} /* default: null */  isRaw={typeof ForceDeselected === "object" && "isRaw" in ForceDeselected && ForceDeselected.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="Label" id={typeof Label === "object" && "id" in Label ? Label?.id : undefined} value={typeof Label === "object" && "value" in Label ? Label?.value : Label} /* default: null */  isRaw={typeof Label === "object" && "isRaw" in Label && Label.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: null */  isRaw={typeof Color === "object" && "isRaw" in Color && Color.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RefDrive\`1[FrooxEngine.IAssetProvider\`1[FrooxEngine.Sprite]]`} name="Sprite" id={typeof Sprite === "object" && "id" in Sprite ? Sprite?.id : undefined} value={typeof Sprite === "object" && "value" in Sprite ? Sprite?.value : Sprite} /* default: null */  isRaw={typeof Sprite === "object" && "isRaw" in Sprite && Sprite.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Uri]`} name="SpriteURL" id={typeof SpriteURL === "object" && "id" in SpriteURL ? SpriteURL?.id : undefined} value={typeof SpriteURL === "object" && "value" in SpriteURL ? SpriteURL?.value : SpriteURL} /* default: null */  isRaw={typeof SpriteURL === "object" && "isRaw" in SpriteURL && SpriteURL.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="SpriteTint" id={typeof SpriteTint === "object" && "id" in SpriteTint ? SpriteTint?.id : undefined} value={typeof SpriteTint === "object" && "value" in SpriteTint ? SpriteTint?.value : SpriteTint} /* default: null */  isRaw={typeof SpriteTint === "object" && "isRaw" in SpriteTint && SpriteTint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.ValueOptionDescriptionDriver\`1+Option[System.Boolean]`} name="DefaultOption" id={typeof DefaultOption === "object" && "id" in DefaultOption ? DefaultOption?.id : undefined} value={typeof DefaultOption === "object" && "value" in DefaultOption ? DefaultOption?.value : DefaultOption} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.ValueOptionDescriptionDriver`1\+Option\[System\.Boolean],\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof DefaultOption === "object" && "isRaw" in DefaultOption && DefaultOption.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="SpriteTintBase" id={typeof SpriteTintBase === "object" && "id" in SpriteTintBase ? SpriteTintBase?.id : undefined} value={typeof SpriteTintBase === "object" && "value" in SpriteTintBase ? SpriteTintBase?.value : SpriteTintBase} /* default: null */  isRaw={typeof SpriteTintBase === "object" && "isRaw" in SpriteTintBase && SpriteTintBase.isRaw ? true : undefined} />
        </Component>
      );
    };
    