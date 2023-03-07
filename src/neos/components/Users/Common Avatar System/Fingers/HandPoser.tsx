import { member, Member, Component } from "../../../../core";
    
    export interface HandPoserInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
PoseSource?: member<any>;
Side?: member<any>;
PoseMetacarpals?: member<boolean>;
HandRoot?: member<any>;
HandForward?: member<[number, number, number]>;
HandUp?: member<[number, number, number]>;
HandRight?: member<[number, number, number]>;
Thumb?: member<any>;
Index?: member<any>;
Middle?: member<any>;
Ring?: member<any>;
Pinky?: member<any>;
DebugFingers?: member<boolean>;
    }
    
    export function HandPoser(props: HandPoserInput){
      const { id, persistentId, updateOrder, Enabled,
PoseSource,
Side,
PoseMetacarpals,
HandRoot,
HandForward,
HandUp,
HandRight,
Thumb,
Index,
Middle,
Ring,
Pinky,
DebugFingers, } = props;
    
      return (
        <Component type="FrooxEngine.HandPoser" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IFingerPoseSource]`} name="PoseSource" id={typeof PoseSource === "object" && "id" in PoseSource ? PoseSource?.id : undefined} value={typeof PoseSource === "object" && "value" in PoseSource ? PoseSource?.value : PoseSource} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Chirality]`} name="Side" id={typeof Side === "object" && "id" in Side ? Side?.id : undefined} value={typeof Side === "object" && "value" in Side ? Side?.value : Side} /* default: Left */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PoseMetacarpals" id={typeof PoseMetacarpals === "object" && "id" in PoseMetacarpals ? PoseMetacarpals?.id : undefined} value={typeof PoseMetacarpals === "object" && "value" in PoseMetacarpals ? PoseMetacarpals?.value : PoseMetacarpals} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="HandRoot" id={typeof HandRoot === "object" && "id" in HandRoot ? HandRoot?.id : undefined} value={typeof HandRoot === "object" && "value" in HandRoot ? HandRoot?.value : HandRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="HandForward" id={typeof HandForward === "object" && "id" in HandForward ? HandForward?.id : undefined} value={typeof HandForward === "object" && "value" in HandForward ? HandForward?.value : HandForward} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="HandUp" id={typeof HandUp === "object" && "id" in HandUp ? HandUp?.id : undefined} value={typeof HandUp === "object" && "value" in HandUp ? HandUp?.value : HandUp} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="HandRight" id={typeof HandRight === "object" && "id" in HandRight ? HandRight?.id : undefined} value={typeof HandRight === "object" && "value" in HandRight ? HandRight?.value : HandRight} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.HandPoser+Finger`} name="Thumb" id={typeof Thumb === "object" && "id" in Thumb ? Thumb?.id : undefined} value={typeof Thumb === "object" && "value" in Thumb ? Thumb?.value : Thumb} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.HandPoser\+Finger,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.HandPoser+Finger`} name="Index" id={typeof Index === "object" && "id" in Index ? Index?.id : undefined} value={typeof Index === "object" && "value" in Index ? Index?.value : Index} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.HandPoser\+Finger,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.HandPoser+Finger`} name="Middle" id={typeof Middle === "object" && "id" in Middle ? Middle?.id : undefined} value={typeof Middle === "object" && "value" in Middle ? Middle?.value : Middle} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.HandPoser\+Finger,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.HandPoser+Finger`} name="Ring" id={typeof Ring === "object" && "id" in Ring ? Ring?.id : undefined} value={typeof Ring === "object" && "value" in Ring ? Ring?.value : Ring} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.HandPoser\+Finger,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.HandPoser+Finger`} name="Pinky" id={typeof Pinky === "object" && "id" in Pinky ? Pinky?.id : undefined} value={typeof Pinky === "object" && "value" in Pinky ? Pinky?.value : Pinky} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.HandPoser\+Finger,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DebugFingers" id={typeof DebugFingers === "object" && "id" in DebugFingers ? DebugFingers?.id : undefined} value={typeof DebugFingers === "object" && "value" in DebugFingers ? DebugFingers?.value : DebugFingers} /* default: false */  />
        </Component>
      );
    };
    