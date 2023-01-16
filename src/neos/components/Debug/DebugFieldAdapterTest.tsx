import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface DebugFieldAdapterTestInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
InvertedColor?: member<[number, number, number, number]>;
SourceColor?: member<[number, number, number, number]>;
    }
    
    export function DebugFieldAdapterTest(props: DebugFieldAdapterTestInput){
      const { id, persistentId, updateOrder, Enabled,
InvertedColor,
SourceColor, } = props;
    
      return (
        <Component type="FrooxEngine.DebugFieldAdapterTest" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="InvertedColor" id={typeof InvertedColor === "object" && "id" in InvertedColor ? InvertedColor?.id : undefined} value={typeof InvertedColor === "object" && "value" in InvertedColor ? InvertedColor?.value : InvertedColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="SourceColor" id={typeof SourceColor === "object" && "id" in SourceColor ? SourceColor?.id : undefined} value={typeof SourceColor === "object" && "value" in SourceColor ? SourceColor?.value : SourceColor} /* default: [0; 0; 0; 0] */  />
        </Component>
      );
    };
    