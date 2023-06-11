import { member, Member, Component } from "../../../core";
    
    export interface ReferenceOptionDescriptionDriver_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Reference?: member<any>;
ForceDeselected?: member<boolean>;
Label?: member<string>;
Color?: member<any>;
Sprite?: member<any>;
DefaultOption?: member<any>;
    }
    
    export function ReferenceOptionDescriptionDriver_T(props: ReferenceOptionDescriptionDriver_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
Reference,
ForceDeselected,
Label,
Color,
Sprite,
DefaultOption, } = props;
    
      return (
        <Component type={`FrooxEngine.ReferenceOptionDescriptionDriver\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.SyncRef\`1[${T}]]`} name="Reference" id={typeof Reference === "object" && "id" in Reference ? Reference?.id : undefined} value={typeof Reference === "object" && "value" in Reference ? Reference?.value : Reference} /* default: null */  isRaw={typeof Reference === "object" && "isRaw" in Reference && Reference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ForceDeselected" id={typeof ForceDeselected === "object" && "id" in ForceDeselected ? ForceDeselected?.id : undefined} value={typeof ForceDeselected === "object" && "value" in ForceDeselected ? ForceDeselected?.value : ForceDeselected} /* default: null */  isRaw={typeof ForceDeselected === "object" && "isRaw" in ForceDeselected && ForceDeselected.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="Label" id={typeof Label === "object" && "id" in Label ? Label?.id : undefined} value={typeof Label === "object" && "value" in Label ? Label?.value : Label} /* default: null */  isRaw={typeof Label === "object" && "isRaw" in Label && Label.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: null */  isRaw={typeof Color === "object" && "isRaw" in Color && Color.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RefDrive\`1[FrooxEngine.IAssetProvider\`1[FrooxEngine.Sprite]]`} name="Sprite" id={typeof Sprite === "object" && "id" in Sprite ? Sprite?.id : undefined} value={typeof Sprite === "object" && "value" in Sprite ? Sprite?.value : Sprite} /* default: null */  isRaw={typeof Sprite === "object" && "isRaw" in Sprite && Sprite.isRaw ? true : undefined} />
<Member type={`FrooxEngine.ReferenceOptionDescriptionDriver\`1+Option[FrooxEngine.Grabbable]`} name="DefaultOption" id={typeof DefaultOption === "object" && "id" in DefaultOption ? DefaultOption?.id : undefined} value={typeof DefaultOption === "object" && "value" in DefaultOption ? DefaultOption?.value : DefaultOption} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.ReferenceOptionDescriptionDriver`1\+Option\[FrooxEngine\.Grabbable],\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof DefaultOption === "object" && "isRaw" in DefaultOption && DefaultOption.isRaw ? true : undefined} />
        </Component>
      );
    };
    