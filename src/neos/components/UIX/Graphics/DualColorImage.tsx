import { member, Member, Component } from "../../../core";
    
    export interface DualColorImageInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Sprite?: member<any>;
Material?: member<any>;
Tint?: member<[number, number, number, number]>;
PreserveAspect?: member<boolean>;
NineSliceSizing?: member<any>;
InteractionTarget?: member<boolean>;
__legacyZWrite?: member<boolean>;
SecondaryTint?: member<[number, number, number, number]>;
    }
    
    export function DualColorImage(props: DualColorImageInput){
      const { id, persistentId, updateOrder, Enabled,
Sprite,
Material,
Tint,
PreserveAspect,
NineSliceSizing,
InteractionTarget,
__legacyZWrite,
SecondaryTint, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.DualColorImage" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Sprite]`} name="Sprite" id={typeof Sprite === "object" && "id" in Sprite ? Sprite?.id : undefined} value={typeof Sprite === "object" && "value" in Sprite ? Sprite?.value : Sprite} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`} name="Material" id={typeof Material === "object" && "id" in Material ? Material?.id : undefined} value={typeof Material === "object" && "value" in Material ? Material?.value : Material} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Tint" id={typeof Tint === "object" && "id" in Tint ? Tint?.id : undefined} value={typeof Tint === "object" && "value" in Tint ? Tint?.value : Tint} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PreserveAspect" id={typeof PreserveAspect === "object" && "id" in PreserveAspect ? PreserveAspect?.id : undefined} value={typeof PreserveAspect === "object" && "value" in PreserveAspect ? PreserveAspect?.value : PreserveAspect} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.NineSliceSizing]`} name="NineSliceSizing" id={typeof NineSliceSizing === "object" && "id" in NineSliceSizing ? NineSliceSizing?.id : undefined} value={typeof NineSliceSizing === "object" && "value" in NineSliceSizing ? NineSliceSizing?.value : NineSliceSizing} /* default: TextureSize */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="InteractionTarget" id={typeof InteractionTarget === "object" && "id" in InteractionTarget ? InteractionTarget?.id : undefined} value={typeof InteractionTarget === "object" && "value" in InteractionTarget ? InteractionTarget?.value : InteractionTarget} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="__legacyZWrite-ID" id={typeof __legacyZWrite === "object" && "id" in __legacyZWrite ? __legacyZWrite?.id : undefined} value={typeof __legacyZWrite === "object" && "value" in __legacyZWrite ? __legacyZWrite?.value : __legacyZWrite} /* default: false */ idOnly />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="SecondaryTint" id={typeof SecondaryTint === "object" && "id" in SecondaryTint ? SecondaryTint?.id : undefined} value={typeof SecondaryTint === "object" && "value" in SecondaryTint ? SecondaryTint?.value : SecondaryTint} /* default: [0; 0; 0; 0] */  />
        </Component>
      );
    };
    