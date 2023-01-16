import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ButtonValueShift_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetValue?: member<any>;
Delta?: member<any>;
Min?: member<any>;
Max?: member<any>;
WrapAround?: member<boolean>;
    }
    
    export function ButtonValueShift_T(props: ButtonValueShift_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
TargetValue,
Delta,
Min,
Max,
WrapAround, } = props;
    
      return (
        <Component type={`FrooxEngine.ButtonValueShift\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[${T}]]`} name="TargetValue" id={typeof TargetValue === "object" && "id" in TargetValue ? TargetValue?.id : undefined} value={typeof TargetValue === "object" && "value" in TargetValue ? TargetValue?.value : TargetValue} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="Delta" id={typeof Delta === "object" && "id" in Delta ? Delta?.id : undefined} value={typeof Delta === "object" && "value" in Delta ? Delta?.value : Delta} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="Min" id={typeof Min === "object" && "id" in Min ? Min?.id : undefined} value={typeof Min === "object" && "value" in Min ? Min?.value : Min} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="Max" id={typeof Max === "object" && "id" in Max ? Max?.id : undefined} value={typeof Max === "object" && "value" in Max ? Max?.value : Max} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="WrapAround" id={typeof WrapAround === "object" && "id" in WrapAround ? WrapAround?.id : undefined} value={typeof WrapAround === "object" && "value" in WrapAround ? WrapAround?.value : WrapAround} /* default: null */  />
        </Component>
      );
    };
    