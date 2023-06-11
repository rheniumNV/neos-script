import { member, Member, Component } from "../../core";
    
    export interface NeosClassroomAvatarHandlerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_guideMaterial?: member<any>;
_headMaterial?: member<any>;
_ownControllerMaterial?: member<any>;
_otherControllerMaterial?: member<any>;
    }
    
    export function NeosClassroomAvatarHandler(props: NeosClassroomAvatarHandlerInput){
      const { id, persistentId, updateOrder, Enabled,
_guideMaterial,
_headMaterial,
_ownControllerMaterial,
_otherControllerMaterial, } = props;
    
      return (
        <Component type="BusinessX.NeosClassroomAvatarHandler" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`} name="_guideMaterial" id={typeof _guideMaterial === "object" && "id" in _guideMaterial ? _guideMaterial?.id : undefined} value={typeof _guideMaterial === "object" && "value" in _guideMaterial ? _guideMaterial?.value : _guideMaterial} /* default: ID0 */  isRaw={typeof _guideMaterial === "object" && "isRaw" in _guideMaterial && _guideMaterial.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`} name="_headMaterial" id={typeof _headMaterial === "object" && "id" in _headMaterial ? _headMaterial?.id : undefined} value={typeof _headMaterial === "object" && "value" in _headMaterial ? _headMaterial?.value : _headMaterial} /* default: ID0 */  isRaw={typeof _headMaterial === "object" && "isRaw" in _headMaterial && _headMaterial.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`} name="_ownControllerMaterial" id={typeof _ownControllerMaterial === "object" && "id" in _ownControllerMaterial ? _ownControllerMaterial?.id : undefined} value={typeof _ownControllerMaterial === "object" && "value" in _ownControllerMaterial ? _ownControllerMaterial?.value : _ownControllerMaterial} /* default: ID0 */  isRaw={typeof _ownControllerMaterial === "object" && "isRaw" in _ownControllerMaterial && _ownControllerMaterial.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`} name="_otherControllerMaterial" id={typeof _otherControllerMaterial === "object" && "id" in _otherControllerMaterial ? _otherControllerMaterial?.id : undefined} value={typeof _otherControllerMaterial === "object" && "value" in _otherControllerMaterial ? _otherControllerMaterial?.value : _otherControllerMaterial} /* default: ID0 */  isRaw={typeof _otherControllerMaterial === "object" && "isRaw" in _otherControllerMaterial && _otherControllerMaterial.isRaw ? true : undefined} />
        </Component>
      );
    };
    