import { member, Member, Component } from "../../../core";
    
    export interface ReadCloudVariable_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Path?: member<any>;
VariableOwnerId?: member<any>;
OnReadRequest?: member<any>;
OnRead?: member<any>;
OnFail?: member<any>;
    }
    
    export function ReadCloudVariable_T(props: ReadCloudVariable_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
Path,
VariableOwnerId,
OnReadRequest,
OnRead,
OnFail, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.Data.ReadCloudVariable\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Path" id={typeof Path === "object" && "id" in Path ? Path?.id : undefined} value={typeof Path === "object" && "value" in Path ? Path?.value : Path} /* default: null */  isRaw={typeof Path === "object" && "isRaw" in Path && Path.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="VariableOwnerId" id={typeof VariableOwnerId === "object" && "id" in VariableOwnerId ? VariableOwnerId?.id : undefined} value={typeof VariableOwnerId === "object" && "value" in VariableOwnerId ? VariableOwnerId?.value : VariableOwnerId} /* default: null */  isRaw={typeof VariableOwnerId === "object" && "isRaw" in VariableOwnerId && VariableOwnerId.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnReadRequest" id={typeof OnReadRequest === "object" && "id" in OnReadRequest ? OnReadRequest?.id : undefined} value={typeof OnReadRequest === "object" && "value" in OnReadRequest ? OnReadRequest?.value : OnReadRequest} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnReadRequest === "object" && "isRaw" in OnReadRequest && OnReadRequest.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnRead" id={typeof OnRead === "object" && "id" in OnRead ? OnRead?.id : undefined} value={typeof OnRead === "object" && "value" in OnRead ? OnRead?.value : OnRead} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnRead === "object" && "isRaw" in OnRead && OnRead.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnFail" id={typeof OnFail === "object" && "id" in OnFail ? OnFail?.id : undefined} value={typeof OnFail === "object" && "value" in OnFail ? OnFail?.value : OnFail} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnFail === "object" && "isRaw" in OnFail && OnFail.isRaw ? true : undefined} />
        </Component>
      );
    };
    