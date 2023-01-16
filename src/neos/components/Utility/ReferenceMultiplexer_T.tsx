import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ReferenceMultiplexer_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Target?: member<any>;
Index?: member<number>;
AllowWriteBack?: member<boolean>;
    }
    
    export function ReferenceMultiplexer_T(props: ReferenceMultiplexer_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
Target,
Index,
AllowWriteBack, } = props;
    
      return (
        <Component type={`FrooxEngine.ReferenceMultiplexer\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RefDrive\`1[${T}]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Index" id={typeof Index === "object" && "id" in Index ? Index?.id : undefined} value={typeof Index === "object" && "value" in Index ? Index?.value : Index} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowWriteBack" id={typeof AllowWriteBack === "object" && "id" in AllowWriteBack ? AllowWriteBack?.id : undefined} value={typeof AllowWriteBack === "object" && "value" in AllowWriteBack ? AllowWriteBack?.value : AllowWriteBack} /* default: null */  />
        </Component>
      );
    };
    