import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ValueCopy_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Source?: member<any>;
Target?: member<any>;
WriteBack?: member<boolean>;
    }
    
    export function ValueCopy_T(props: ValueCopy_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
Source,
Target,
WriteBack, } = props;
    
      return (
        <Component type={`FrooxEngine.ValueCopy\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[${T}]]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: null */  />
<Member type={`FrooxEngine.FieldDrive\`1[${T}]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="WriteBack" id={typeof WriteBack === "object" && "id" in WriteBack ? WriteBack?.id : undefined} value={typeof WriteBack === "object" && "value" in WriteBack ? WriteBack?.value : WriteBack} /* default: null */  />
        </Component>
      );
    };
    