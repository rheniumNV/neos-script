import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ButtonEnumShift_EInput {
        type:{E: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetValue?: member<any>;
ShiftDelta?: member<number>;
    }
    
    export function ButtonEnumShift_E(props: ButtonEnumShift_EInput){
      const {type:{E:{name: E},}, id, persistentId, updateOrder, Enabled,
TargetValue,
ShiftDelta, } = props;
    
      return (
        <Component type={`FrooxEngine.ButtonEnumShift\`1[${[E,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[E]]`} name="TargetValue" id={typeof TargetValue === "object" && "id" in TargetValue ? TargetValue?.id : undefined} value={typeof TargetValue === "object" && "value" in TargetValue ? TargetValue?.value : TargetValue} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="ShiftDelta" id={typeof ShiftDelta === "object" && "id" in ShiftDelta ? ShiftDelta?.id : undefined} value={typeof ShiftDelta === "object" && "value" in ShiftDelta ? ShiftDelta?.value : ShiftDelta} /* default: null */  />
        </Component>
      );
    };
    