import { member, Member, Component } from "../../../core";
    
    export interface ScaleElementInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Group?: member<any>;
RespondToPhysicalTouch?: member<boolean>;
RespondToRemoteTouch?: member<boolean>;
_scaleTarget?: member<any>;
    }
    
    export function ScaleElement(props: ScaleElementInput){
      const { id, persistentId, updateOrder, Enabled,
Group,
RespondToPhysicalTouch,
RespondToRemoteTouch,
_scaleTarget, } = props;
    
      return (
        <Component type="FrooxEngine.ScaleElement" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.ScaleGroup]`} name="Group" id={typeof Group === "object" && "id" in Group ? Group?.id : undefined} value={typeof Group === "object" && "value" in Group ? Group?.value : Group} /* default: ID0 */  isRaw={typeof Group === "object" && "isRaw" in Group && Group.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RespondToPhysicalTouch" id={typeof RespondToPhysicalTouch === "object" && "id" in RespondToPhysicalTouch ? RespondToPhysicalTouch?.id : undefined} value={typeof RespondToPhysicalTouch === "object" && "value" in RespondToPhysicalTouch ? RespondToPhysicalTouch?.value : RespondToPhysicalTouch} /* default: false */  isRaw={typeof RespondToPhysicalTouch === "object" && "isRaw" in RespondToPhysicalTouch && RespondToPhysicalTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RespondToRemoteTouch" id={typeof RespondToRemoteTouch === "object" && "id" in RespondToRemoteTouch ? RespondToRemoteTouch?.id : undefined} value={typeof RespondToRemoteTouch === "object" && "value" in RespondToRemoteTouch ? RespondToRemoteTouch?.value : RespondToRemoteTouch} /* default: false */  isRaw={typeof RespondToRemoteTouch === "object" && "isRaw" in RespondToRemoteTouch && RespondToRemoteTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_scaleTarget" id={typeof _scaleTarget === "object" && "id" in _scaleTarget ? _scaleTarget?.id : undefined} value={typeof _scaleTarget === "object" && "value" in _scaleTarget ? _scaleTarget?.value : _scaleTarget} /* default: ID0 */  isRaw={typeof _scaleTarget === "object" && "isRaw" in _scaleTarget && _scaleTarget.isRaw ? true : undefined} />
        </Component>
      );
    };
    