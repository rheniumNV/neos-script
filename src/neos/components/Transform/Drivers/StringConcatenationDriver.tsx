import { member, Member, Component } from "../../../core";
    
    export interface StringConcatenationDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetString?: member<string>;
Separator?: member<any>;
Strings?: member<any>;
NullOutputWhenAllAreNull?: member<boolean>;
    }
    
    export function StringConcatenationDriver(props: StringConcatenationDriverInput){
      const { id, persistentId, updateOrder, Enabled,
TargetString,
Separator,
Strings,
NullOutputWhenAllAreNull, } = props;
    
      return (
        <Component type="FrooxEngine.StringConcatenationDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="TargetString" id={typeof TargetString === "object" && "id" in TargetString ? TargetString?.id : undefined} value={typeof TargetString === "object" && "value" in TargetString ? TargetString?.value : TargetString} /* default: ID0 */  isRaw={typeof TargetString === "object" && "isRaw" in TargetString && TargetString.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Separator" id={typeof Separator === "object" && "id" in Separator ? Separator?.id : undefined} value={typeof Separator === "object" && "value" in Separator ? Separator?.value : Separator} /* default: <i>null</i> */  isRaw={typeof Separator === "object" && "isRaw" in Separator && Separator.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncFieldList\`1[System.String]`} name="Strings" id={typeof Strings === "object" && "id" in Strings ? Strings?.id : undefined} value={typeof Strings === "object" && "value" in Strings ? Strings?.value : Strings} /* default: FrooxEngine.SyncFieldList`1[System.String] */  isRaw={typeof Strings === "object" && "isRaw" in Strings && Strings.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="NullOutputWhenAllAreNull" id={typeof NullOutputWhenAllAreNull === "object" && "id" in NullOutputWhenAllAreNull ? NullOutputWhenAllAreNull?.id : undefined} value={typeof NullOutputWhenAllAreNull === "object" && "value" in NullOutputWhenAllAreNull ? NullOutputWhenAllAreNull?.value : NullOutputWhenAllAreNull} /* default: false */  isRaw={typeof NullOutputWhenAllAreNull === "object" && "isRaw" in NullOutputWhenAllAreNull && NullOutputWhenAllAreNull.isRaw ? true : undefined} />
        </Component>
      );
    };
    