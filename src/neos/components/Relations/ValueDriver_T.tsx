import { member, Member, Component } from "../../core";
    
    export interface ValueDriver_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ValueSource?: member<any>;
DriveTarget?: member<any>;
    }
    
    export function ValueDriver_T(props: ValueDriver_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
ValueSource,
DriveTarget, } = props;
    
      return (
        <Component type={`FrooxEngine.ValueDriver\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IValue\`1[${T}]]`} name="ValueSource" id={typeof ValueSource === "object" && "id" in ValueSource ? ValueSource?.id : undefined} value={typeof ValueSource === "object" && "value" in ValueSource ? ValueSource?.value : ValueSource} /* default: null */  isRaw={typeof ValueSource === "object" && "isRaw" in ValueSource && ValueSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[${T}]`} name="DriveTarget" id={typeof DriveTarget === "object" && "id" in DriveTarget ? DriveTarget?.id : undefined} value={typeof DriveTarget === "object" && "value" in DriveTarget ? DriveTarget?.value : DriveTarget} /* default: null */  isRaw={typeof DriveTarget === "object" && "isRaw" in DriveTarget && DriveTarget.isRaw ? true : undefined} />
        </Component>
      );
    };
    