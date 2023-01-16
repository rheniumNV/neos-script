import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface TextCountdownClockInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
CountdownTime?: member<number>;
AllowNegative?: member<boolean>;
TextTarget?: member<string>;
    }
    
    export function TextCountdownClock(props: TextCountdownClockInput){
      const { id, persistentId, updateOrder, Enabled,
CountdownTime,
AllowNegative,
TextTarget, } = props;
    
      return (
        <Component type="FrooxEngine.TextCountdownClock" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Double]`} name="CountdownTime" id={typeof CountdownTime === "object" && "id" in CountdownTime ? CountdownTime?.id : undefined} value={typeof CountdownTime === "object" && "value" in CountdownTime ? CountdownTime?.value : CountdownTime} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowNegative" id={typeof AllowNegative === "object" && "id" in AllowNegative ? AllowNegative?.id : undefined} value={typeof AllowNegative === "object" && "value" in AllowNegative ? AllowNegative?.value : AllowNegative} /* default: false */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="TextTarget" id={typeof TextTarget === "object" && "id" in TextTarget ? TextTarget?.id : undefined} value={typeof TextTarget === "object" && "value" in TextTarget ? TextTarget?.value : TextTarget} /* default: ID0 */  />
        </Component>
      );
    };
    