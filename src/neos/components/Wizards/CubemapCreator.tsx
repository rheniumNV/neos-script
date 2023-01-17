import { member, Member, Component } from "../../core";
    
    export interface CubemapCreatorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TopBottomRotation?: member<any>;
PosX?: member<any>;
NegX?: member<any>;
PosY?: member<any>;
NegY?: member<any>;
PosZ?: member<any>;
NegZ?: member<any>;
    }
    
    export function CubemapCreator(props: CubemapCreatorInput){
      const { id, persistentId, updateOrder, Enabled,
TopBottomRotation,
PosX,
NegX,
PosY,
NegY,
PosZ,
NegZ, } = props;
    
      return (
        <Component type="FrooxEngine.CubemapCreator" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CubemapCreator+Rotation]`} name="TopBottomRotation" id={typeof TopBottomRotation === "object" && "id" in TopBottomRotation ? TopBottomRotation?.id : undefined} value={typeof TopBottomRotation === "object" && "value" in TopBottomRotation ? TopBottomRotation?.value : TopBottomRotation} /* default: Default */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Texture2D]`} name="PosX" id={typeof PosX === "object" && "id" in PosX ? PosX?.id : undefined} value={typeof PosX === "object" && "value" in PosX ? PosX?.value : PosX} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Texture2D]`} name="NegX" id={typeof NegX === "object" && "id" in NegX ? NegX?.id : undefined} value={typeof NegX === "object" && "value" in NegX ? NegX?.value : NegX} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Texture2D]`} name="PosY" id={typeof PosY === "object" && "id" in PosY ? PosY?.id : undefined} value={typeof PosY === "object" && "value" in PosY ? PosY?.value : PosY} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Texture2D]`} name="NegY" id={typeof NegY === "object" && "id" in NegY ? NegY?.id : undefined} value={typeof NegY === "object" && "value" in NegY ? NegY?.value : NegY} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Texture2D]`} name="PosZ" id={typeof PosZ === "object" && "id" in PosZ ? PosZ?.id : undefined} value={typeof PosZ === "object" && "value" in PosZ ? PosZ?.value : PosZ} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Texture2D]`} name="NegZ" id={typeof NegZ === "object" && "id" in NegZ ? NegZ?.id : undefined} value={typeof NegZ === "object" && "value" in NegZ ? NegZ?.value : NegZ} /* default: ID0 */  />
        </Component>
      );
    };
    