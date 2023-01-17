import { member, Member, Component } from "../../../core";
    
    export interface FloatTextEditorParserInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ParseContinuously?: member<boolean>;
UpdateStringFromValue?: member<boolean>;
ParsedValue?: member<number>;
Min?: member<number>;
Max?: member<number>;
DecimalPlaces?: member<number>;
StringFormat?: member<any>;
    }
    
    export function FloatTextEditorParser(props: FloatTextEditorParserInput){
      const { id, persistentId, updateOrder, Enabled,
ParseContinuously,
UpdateStringFromValue,
ParsedValue,
Min,
Max,
DecimalPlaces,
StringFormat, } = props;
    
      return (
        <Component type="FrooxEngine.FloatTextEditorParser" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ParseContinuously" id={typeof ParseContinuously === "object" && "id" in ParseContinuously ? ParseContinuously?.id : undefined} value={typeof ParseContinuously === "object" && "value" in ParseContinuously ? ParseContinuously?.value : ParseContinuously} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UpdateStringFromValue" id={typeof UpdateStringFromValue === "object" && "id" in UpdateStringFromValue ? UpdateStringFromValue?.id : undefined} value={typeof UpdateStringFromValue === "object" && "value" in UpdateStringFromValue ? UpdateStringFromValue?.value : UpdateStringFromValue} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ParsedValue" id={typeof ParsedValue === "object" && "id" in ParsedValue ? ParsedValue?.id : undefined} value={typeof ParsedValue === "object" && "value" in ParsedValue ? ParsedValue?.value : ParsedValue} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Min" id={typeof Min === "object" && "id" in Min ? Min?.id : undefined} value={typeof Min === "object" && "value" in Min ? Min?.value : Min} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Max" id={typeof Max === "object" && "id" in Max ? Max?.id : undefined} value={typeof Max === "object" && "value" in Max ? Max?.value : Max} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="DecimalPlaces" id={typeof DecimalPlaces === "object" && "id" in DecimalPlaces ? DecimalPlaces?.id : undefined} value={typeof DecimalPlaces === "object" && "value" in DecimalPlaces ? DecimalPlaces?.value : DecimalPlaces} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="StringFormat" id={typeof StringFormat === "object" && "id" in StringFormat ? StringFormat?.id : undefined} value={typeof StringFormat === "object" && "value" in StringFormat ? StringFormat?.value : StringFormat} /* default: <i>null</i> */  />
        </Component>
      );
    };
    