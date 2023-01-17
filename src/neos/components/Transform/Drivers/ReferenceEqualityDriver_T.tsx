import { member, Member, Component } from "../../../core";
    
    export interface ReferenceEqualityDriver_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetReference?: member<any>;
Reference?: member<any>;
Target?: member<any>;
    }
    
    export function ReferenceEqualityDriver_T(props: ReferenceEqualityDriver_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
TargetReference,
Reference,
Target, } = props;
    
      return (
        <Component type={`FrooxEngine.ReferenceEqualityDriver\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.SyncRef\`1[${T}]]`} name="TargetReference" id={typeof TargetReference === "object" && "id" in TargetReference ? TargetReference?.id : undefined} value={typeof TargetReference === "object" && "value" in TargetReference ? TargetReference?.value : TargetReference} /* default: null */  />
<Member type={`FrooxEngine.SyncRef\`1[${T}]`} name="Reference" id={typeof Reference === "object" && "id" in Reference ? Reference?.id : undefined} value={typeof Reference === "object" && "value" in Reference ? Reference?.value : Reference} /* default: null */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  />
        </Component>
      );
    };
    