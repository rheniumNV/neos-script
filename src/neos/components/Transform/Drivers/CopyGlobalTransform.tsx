import { member, Member, Component } from "../../../core";
    
    export interface CopyGlobalTransformInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Source?: member<any>;
_posDrive?: member<any>;
_rotDrive?: member<any>;
    }
    
    export function CopyGlobalTransform(props: CopyGlobalTransformInput){
      const { id, persistentId, updateOrder, Enabled,
Source,
_posDrive,
_rotDrive, } = props;
    
      return (
        <Component type="FrooxEngine.CopyGlobalTransform" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  isRaw={typeof Source === "object" && "isRaw" in Source && Source.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_posDrive" id={typeof _posDrive === "object" && "id" in _posDrive ? _posDrive?.id : undefined} value={typeof _posDrive === "object" && "value" in _posDrive ? _posDrive?.value : _posDrive} /* default: ID0 */  isRaw={typeof _posDrive === "object" && "isRaw" in _posDrive && _posDrive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_rotDrive" id={typeof _rotDrive === "object" && "id" in _rotDrive ? _rotDrive?.id : undefined} value={typeof _rotDrive === "object" && "value" in _rotDrive ? _rotDrive?.value : _rotDrive} /* default: ID0 */  isRaw={typeof _rotDrive === "object" && "isRaw" in _rotDrive && _rotDrive.isRaw ? true : undefined} />
        </Component>
      );
    };
    