import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface CloudValueVariable_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Path?: member<any>;
IsLinkedToCloud?: member<boolean>;
VariableOwnerId?: member<any>;
ChangeHandling?: member<any>;
Value?: member<any>;
    }
    
    export function CloudValueVariable_T(props: CloudValueVariable_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
Path,
IsLinkedToCloud,
VariableOwnerId,
ChangeHandling,
Value, } = props;
    
      return (
        <Component type={`FrooxEngine.CloudValueVariable\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Path" id={typeof Path === "object" && "id" in Path ? Path?.id : undefined} value={typeof Path === "object" && "value" in Path ? Path?.value : Path} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsLinkedToCloud" id={typeof IsLinkedToCloud === "object" && "id" in IsLinkedToCloud ? IsLinkedToCloud?.id : undefined} value={typeof IsLinkedToCloud === "object" && "value" in IsLinkedToCloud ? IsLinkedToCloud?.value : IsLinkedToCloud} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="VariableOwnerId" id={typeof VariableOwnerId === "object" && "id" in VariableOwnerId ? VariableOwnerId?.id : undefined} value={typeof VariableOwnerId === "object" && "value" in VariableOwnerId ? VariableOwnerId?.value : VariableOwnerId} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CloudVariableChangeMode]`} name="ChangeHandling" id={typeof ChangeHandling === "object" && "id" in ChangeHandling ? ChangeHandling?.id : undefined} value={typeof ChangeHandling === "object" && "value" in ChangeHandling ? ChangeHandling?.value : ChangeHandling} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: null */  />
        </Component>
      );
    };
    