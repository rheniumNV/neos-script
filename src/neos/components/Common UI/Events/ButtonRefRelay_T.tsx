import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ButtonRefRelay_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
DoublePressDelay?: member<number>;
ReleasePressInterval?: member<number>;
Argument?: member<any>;
ButtonPressed?: member<any>;
    }
    
    export function ButtonRefRelay_T(props: ButtonRefRelay_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
DoublePressDelay,
ReleasePressInterval,
Argument,
ButtonPressed, } = props;
    
      return (
        <Component type={`FrooxEngine.UIX.ButtonRefRelay\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DoublePressDelay" id={typeof DoublePressDelay === "object" && "id" in DoublePressDelay ? DoublePressDelay?.id : undefined} value={typeof DoublePressDelay === "object" && "value" in DoublePressDelay ? DoublePressDelay?.value : DoublePressDelay} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ReleasePressInterval" id={typeof ReleasePressInterval === "object" && "id" in ReleasePressInterval ? ReleasePressInterval?.id : undefined} value={typeof ReleasePressInterval === "object" && "value" in ReleasePressInterval ? ReleasePressInterval?.value : ReleasePressInterval} /* default: null */  />
<Member type={`FrooxEngine.SyncRef\`1[${T}]`} name="Argument" id={typeof Argument === "object" && "id" in Argument ? Argument?.id : undefined} value={typeof Argument === "object" && "value" in Argument ? Argument?.value : Argument} /* default: null */  />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler\`1[${T}]]`} name="ButtonPressed" id={typeof ButtonPressed === "object" && "id" in ButtonPressed ? ButtonPressed?.id : undefined} value={typeof ButtonPressed === "object" && "value" in ButtonPressed ? ButtonPressed?.value : ButtonPressed} /* default: null */  />
        </Component>
      );
    };
    