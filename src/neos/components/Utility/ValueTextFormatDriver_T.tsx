import { member, Member, Component } from "../../core";
    
    export interface ValueTextFormatDriver_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Source?: member<any>;
Format?: member<any>;
Text?: member<string>;
    }
    
    export function ValueTextFormatDriver_T(props: ValueTextFormatDriver_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
Source,
Format,
Text, } = props;
    
      return (
        <Component type={`FrooxEngine.ValueTextFormatDriver\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[${T}]]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: null */  isRaw={typeof Source === "object" && "isRaw" in Source && Source.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Format" id={typeof Format === "object" && "id" in Format ? Format?.id : undefined} value={typeof Format === "object" && "value" in Format ? Format?.value : Format} /* default: null */  isRaw={typeof Format === "object" && "isRaw" in Format && Format.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="Text" id={typeof Text === "object" && "id" in Text ? Text?.id : undefined} value={typeof Text === "object" && "value" in Text ? Text?.value : Text} /* default: null */  isRaw={typeof Text === "object" && "isRaw" in Text && Text.isRaw ? true : undefined} />
        </Component>
      );
    };
    