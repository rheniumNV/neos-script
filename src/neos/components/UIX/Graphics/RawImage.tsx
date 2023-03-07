import { member, Member, Component } from "../../../core";
    
    export interface RawImageInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Texture?: member<any>;
Material?: member<any>;
Tint?: member<[number, number, number, number]>;
UVRect?: member<any>;
Orientation?: member<any>;
PreserveAspect?: member<boolean>;
InteractionTarget?: member<boolean>;
    }
    
    export function RawImage(props: RawImageInput){
      const { id, persistentId, updateOrder, Enabled,
Texture,
Material,
Tint,
UVRect,
Orientation,
PreserveAspect,
InteractionTarget, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.RawImage" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="Texture" id={typeof Texture === "object" && "id" in Texture ? Texture?.id : undefined} value={typeof Texture === "object" && "value" in Texture ? Texture?.value : Texture} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`} name="Material" id={typeof Material === "object" && "id" in Material ? Material?.id : undefined} value={typeof Material === "object" && "value" in Material ? Material?.value : Material} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Tint" id={typeof Tint === "object" && "id" in Tint ? Tint?.id : undefined} value={typeof Tint === "object" && "value" in Tint ? Tint?.value : Tint} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.Rect]`} name="UVRect" id={typeof UVRect === "object" && "id" in UVRect ? UVRect?.id : undefined} value={typeof UVRect === "object" && "value" in UVRect ? UVRect?.value : UVRect} /* default: [X=0; Y=0; W=0; H=0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.RectOrientation]`} name="Orientation" id={typeof Orientation === "object" && "id" in Orientation ? Orientation?.id : undefined} value={typeof Orientation === "object" && "value" in Orientation ? Orientation?.value : Orientation} /* default: Default */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PreserveAspect" id={typeof PreserveAspect === "object" && "id" in PreserveAspect ? PreserveAspect?.id : undefined} value={typeof PreserveAspect === "object" && "value" in PreserveAspect ? PreserveAspect?.value : PreserveAspect} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="InteractionTarget" id={typeof InteractionTarget === "object" && "id" in InteractionTarget ? InteractionTarget?.id : undefined} value={typeof InteractionTarget === "object" && "value" in InteractionTarget ? InteractionTarget?.value : InteractionTarget} /* default: false */  />
        </Component>
      );
    };
    