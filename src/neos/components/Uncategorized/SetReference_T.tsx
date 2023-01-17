import { member, Member, Component } from "../../core";
    
    export interface SetReference_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Target?: member<any>;
TargetBefore?: member<any>;
TargetAfter?: member<any>;
_performed?: member<boolean>;
_description?: member<any>;
    }
    
    export function SetReference_T(props: SetReference_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
Target,
TargetBefore,
TargetAfter,
_performed,
_description, } = props;
    
      return (
        <Component type={`FrooxEngine.Undo.SetReference\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SyncRef\`1[${T}]]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  />
<Member type={`FrooxEngine.SyncRef\`1[${T}]`} name="TargetBefore" id={typeof TargetBefore === "object" && "id" in TargetBefore ? TargetBefore?.id : undefined} value={typeof TargetBefore === "object" && "value" in TargetBefore ? TargetBefore?.value : TargetBefore} /* default: null */  />
<Member type={`FrooxEngine.SyncRef\`1[${T}]`} name="TargetAfter" id={typeof TargetAfter === "object" && "id" in TargetAfter ? TargetAfter?.id : undefined} value={typeof TargetAfter === "object" && "value" in TargetAfter ? TargetAfter?.value : TargetAfter} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_performed" id={typeof _performed === "object" && "id" in _performed ? _performed?.id : undefined} value={typeof _performed === "object" && "value" in _performed ? _performed?.value : _performed} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_description" id={typeof _description === "object" && "id" in _description ? _description?.id : undefined} value={typeof _description === "object" && "value" in _description ? _description?.value : _description} /* default: <i>null</i> */  />
        </Component>
      );
    };
    