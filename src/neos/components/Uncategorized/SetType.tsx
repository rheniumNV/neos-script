import { member, Member, Component } from "../../core";
    
    export interface SetTypeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Target?: member<any>;
ValueBefore?: member<any>;
ValueAfter?: member<any>;
_performed?: member<boolean>;
_description?: member<any>;
    }
    
    export function SetType(props: SetTypeInput){
      const { id, persistentId, updateOrder, Enabled,
Target,
ValueBefore,
ValueAfter,
_performed,
_description, } = props;
    
      return (
        <Component type="FrooxEngine.Undo.SetType" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SyncType]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncType`} name="ValueBefore" id={typeof ValueBefore === "object" && "id" in ValueBefore ? ValueBefore?.id : undefined} value={typeof ValueBefore === "object" && "value" in ValueBefore ? ValueBefore?.value : ValueBefore} /* default: <i>null</i> */  isRaw={typeof ValueBefore === "object" && "isRaw" in ValueBefore && ValueBefore.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncType`} name="ValueAfter" id={typeof ValueAfter === "object" && "id" in ValueAfter ? ValueAfter?.id : undefined} value={typeof ValueAfter === "object" && "value" in ValueAfter ? ValueAfter?.value : ValueAfter} /* default: <i>null</i> */  isRaw={typeof ValueAfter === "object" && "isRaw" in ValueAfter && ValueAfter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_performed" id={typeof _performed === "object" && "id" in _performed ? _performed?.id : undefined} value={typeof _performed === "object" && "value" in _performed ? _performed?.value : _performed} /* default: false */  isRaw={typeof _performed === "object" && "isRaw" in _performed && _performed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_description" id={typeof _description === "object" && "id" in _description ? _description?.id : undefined} value={typeof _description === "object" && "value" in _description ? _description?.value : _description} /* default: <i>null</i> */  isRaw={typeof _description === "object" && "isRaw" in _description && _description.isRaw ? true : undefined} />
        </Component>
      );
    };
    