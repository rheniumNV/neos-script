import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface DriveValueNode_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Source?: member<any>;
DriveTarget?: member<any>;
OnStartDrive?: member<any>;
OnStopDrive?: member<any>;
OnHook?: member<any>;
_drive?: member<any>;
    }
    
    export function DriveValueNode_T(props: DriveValueNode_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
Source,
DriveTarget,
OnStartDrive,
OnStopDrive,
OnHook,
_drive, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.Actions.DriveValueNode\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[${T}]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: null */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IField\`1[${T}]]`} name="DriveTarget" id={typeof DriveTarget === "object" && "id" in DriveTarget ? DriveTarget?.id : undefined} value={typeof DriveTarget === "object" && "value" in DriveTarget ? DriveTarget?.value : DriveTarget} /* default: null */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnStartDrive" id={typeof OnStartDrive === "object" && "id" in OnStartDrive ? OnStartDrive?.id : undefined} value={typeof OnStartDrive === "object" && "value" in OnStartDrive ? OnStartDrive?.value : OnStartDrive} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnStopDrive" id={typeof OnStopDrive === "object" && "id" in OnStopDrive ? OnStopDrive?.id : undefined} value={typeof OnStopDrive === "object" && "value" in OnStopDrive ? OnStopDrive?.value : OnStopDrive} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnHook" id={typeof OnHook === "object" && "id" in OnHook ? OnHook?.id : undefined} value={typeof OnHook === "object" && "value" in OnHook ? OnHook?.value : OnHook} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.FieldDrive\`1[FrooxEngine.Grabbable]`} name="_drive" id={typeof _drive === "object" && "id" in _drive ? _drive?.id : undefined} value={typeof _drive === "object" && "value" in _drive ? _drive?.value : _drive} /* default: ID0 */  />
        </Component>
      );
    };
    