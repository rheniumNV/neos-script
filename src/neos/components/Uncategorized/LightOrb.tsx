import { member, Member, Component } from "../../core";
    
    export interface LightOrbInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
FlipOnTouch?: member<boolean>;
Light?: member<any>;
EmissionColor?: member<any>;
AcceptPhysicalTouch?: member<boolean>;
AcceptRemoteTouch?: member<boolean>;
    }
    
    export function LightOrb(props: LightOrbInput){
      const { id, persistentId, updateOrder, Enabled,
FlipOnTouch,
Light,
EmissionColor,
AcceptPhysicalTouch,
AcceptRemoteTouch, } = props;
    
      return (
        <Component type="FrooxEngine.LightOrb" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="FlipOnTouch" id={typeof FlipOnTouch === "object" && "id" in FlipOnTouch ? FlipOnTouch?.id : undefined} value={typeof FlipOnTouch === "object" && "value" in FlipOnTouch ? FlipOnTouch?.value : FlipOnTouch} /* default: false */  isRaw={typeof FlipOnTouch === "object" && "isRaw" in FlipOnTouch && FlipOnTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.Light]`} name="Light" id={typeof Light === "object" && "id" in Light ? Light?.id : undefined} value={typeof Light === "object" && "value" in Light ? Light?.value : Light} /* default: ID0 */  isRaw={typeof Light === "object" && "isRaw" in Light && Light.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="EmissionColor" id={typeof EmissionColor === "object" && "id" in EmissionColor ? EmissionColor?.id : undefined} value={typeof EmissionColor === "object" && "value" in EmissionColor ? EmissionColor?.value : EmissionColor} /* default: ID0 */  isRaw={typeof EmissionColor === "object" && "isRaw" in EmissionColor && EmissionColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptPhysicalTouch" id={typeof AcceptPhysicalTouch === "object" && "id" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.id : undefined} value={typeof AcceptPhysicalTouch === "object" && "value" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.value : AcceptPhysicalTouch} /* default: false */  isRaw={typeof AcceptPhysicalTouch === "object" && "isRaw" in AcceptPhysicalTouch && AcceptPhysicalTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptRemoteTouch" id={typeof AcceptRemoteTouch === "object" && "id" in AcceptRemoteTouch ? AcceptRemoteTouch?.id : undefined} value={typeof AcceptRemoteTouch === "object" && "value" in AcceptRemoteTouch ? AcceptRemoteTouch?.value : AcceptRemoteTouch} /* default: false */  isRaw={typeof AcceptRemoteTouch === "object" && "isRaw" in AcceptRemoteTouch && AcceptRemoteTouch.isRaw ? true : undefined} />
        </Component>
      );
    };
    