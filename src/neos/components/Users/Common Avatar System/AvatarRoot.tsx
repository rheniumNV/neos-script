import { member, Member, Component } from "../../../core";
    
    export interface AvatarRootInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Scale?: member<[number, number, number]>;
_originalParent?: member<any>;
    }
    
    export function AvatarRoot(props: AvatarRootInput){
      const { id, persistentId, updateOrder, Enabled,
Scale,
_originalParent, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarRoot" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Scale" id={typeof Scale === "object" && "id" in Scale ? Scale?.id : undefined} value={typeof Scale === "object" && "value" in Scale ? Scale?.value : Scale} /* default: [0; 0; 0] */  isRaw={typeof Scale === "object" && "isRaw" in Scale && Scale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_originalParent" id={typeof _originalParent === "object" && "id" in _originalParent ? _originalParent?.id : undefined} value={typeof _originalParent === "object" && "value" in _originalParent ? _originalParent?.value : _originalParent} /* default: ID0 */  isRaw={typeof _originalParent === "object" && "isRaw" in _originalParent && _originalParent.isRaw ? true : undefined} />
        </Component>
      );
    };
    