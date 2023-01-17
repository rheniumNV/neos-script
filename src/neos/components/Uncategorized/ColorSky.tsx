import { member, Member, Component } from "../../core";
    
    export interface ColorSkyInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
BaseColor?: member<[number, number, number, number]>;
_gradients?: member<any>;
    }
    
    export function ColorSky(props: ColorSkyInput){
      const { id, persistentId, updateOrder, Enabled,
BaseColor,
_gradients, } = props;
    
      return (
        <Component type="FrooxEngine.ColorSky" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="BaseColor" id={typeof BaseColor === "object" && "id" in BaseColor ? BaseColor?.id : undefined} value={typeof BaseColor === "object" && "value" in BaseColor ? BaseColor?.value : BaseColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.ColorSky+Gradient]`} name="_gradients" id={typeof _gradients === "object" && "id" in _gradients ? _gradients?.id : undefined} value={typeof _gradients === "object" && "value" in _gradients ? _gradients?.value : _gradients} /* default: FrooxEngine.SyncList`1[FrooxEngine.ColorSky+Gradient] */  />
        </Component>
      );
    };
    