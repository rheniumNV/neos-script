import { member, Member, Component } from "../../core";
    
    export interface ClassroomBoardInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
SizeDriver?: member<any>;
Texture?: member<any>;
ShownPosition?: member<[number, number, number]>;
HiddenPosition?: member<[number, number, number]>;
    }
    
    export function ClassroomBoard(props: ClassroomBoardInput){
      const { id, persistentId, updateOrder, Enabled,
SizeDriver,
Texture,
ShownPosition,
HiddenPosition, } = props;
    
      return (
        <Component type="BusinessX.ClassroomBoard" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextureSizeDriver]`} name="SizeDriver" id={typeof SizeDriver === "object" && "id" in SizeDriver ? SizeDriver?.id : undefined} value={typeof SizeDriver === "object" && "value" in SizeDriver ? SizeDriver?.value : SizeDriver} /* default: ID0 */  isRaw={typeof SizeDriver === "object" && "isRaw" in SizeDriver && SizeDriver.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.StaticTexture2D]`} name="Texture" id={typeof Texture === "object" && "id" in Texture ? Texture?.id : undefined} value={typeof Texture === "object" && "value" in Texture ? Texture?.value : Texture} /* default: ID0 */  isRaw={typeof Texture === "object" && "isRaw" in Texture && Texture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="ShownPosition" id={typeof ShownPosition === "object" && "id" in ShownPosition ? ShownPosition?.id : undefined} value={typeof ShownPosition === "object" && "value" in ShownPosition ? ShownPosition?.value : ShownPosition} /* default: [0; 0; 0] */  isRaw={typeof ShownPosition === "object" && "isRaw" in ShownPosition && ShownPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="HiddenPosition" id={typeof HiddenPosition === "object" && "id" in HiddenPosition ? HiddenPosition?.id : undefined} value={typeof HiddenPosition === "object" && "value" in HiddenPosition ? HiddenPosition?.value : HiddenPosition} /* default: [0; 0; 0] */  isRaw={typeof HiddenPosition === "object" && "isRaw" in HiddenPosition && HiddenPosition.isRaw ? true : undefined} />
        </Component>
      );
    };
    