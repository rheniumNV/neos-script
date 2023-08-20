import { member, Member, Component } from "../../core";
    
    export interface BlitToDisplayInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetUser?: member<any>;
Texture?: member<any>;
DisplayIndex?: member<number>;
BackgroundColor?: member<[number, number, number, number]>;
FlipHorizontally?: member<boolean>;
FlipVertically?: member<boolean>;
    }
    
    export function BlitToDisplay(props: BlitToDisplayInput){
      const { id, persistentId, updateOrder, Enabled,
TargetUser,
Texture,
DisplayIndex,
BackgroundColor,
FlipHorizontally,
FlipVertically, } = props;
    
      return (
        <Component type="FrooxEngine.BlitToDisplay" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.UserRef`} name="TargetUser" id={typeof TargetUser === "object" && "id" in TargetUser ? TargetUser?.id : undefined} value={typeof TargetUser === "object" && "value" in TargetUser ? TargetUser?.value : TargetUser} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof TargetUser === "object" && "isRaw" in TargetUser && TargetUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture]`} name="Texture" id={typeof Texture === "object" && "id" in Texture ? Texture?.id : undefined} value={typeof Texture === "object" && "value" in Texture ? Texture?.value : Texture} /* default: ID0 */  isRaw={typeof Texture === "object" && "isRaw" in Texture && Texture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="DisplayIndex" id={typeof DisplayIndex === "object" && "id" in DisplayIndex ? DisplayIndex?.id : undefined} value={typeof DisplayIndex === "object" && "value" in DisplayIndex ? DisplayIndex?.value : DisplayIndex} /* default: 0 */  isRaw={typeof DisplayIndex === "object" && "isRaw" in DisplayIndex && DisplayIndex.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="BackgroundColor" id={typeof BackgroundColor === "object" && "id" in BackgroundColor ? BackgroundColor?.id : undefined} value={typeof BackgroundColor === "object" && "value" in BackgroundColor ? BackgroundColor?.value : BackgroundColor} /* default: [0; 0; 0; 0] */  isRaw={typeof BackgroundColor === "object" && "isRaw" in BackgroundColor && BackgroundColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="FlipHorizontally" id={typeof FlipHorizontally === "object" && "id" in FlipHorizontally ? FlipHorizontally?.id : undefined} value={typeof FlipHorizontally === "object" && "value" in FlipHorizontally ? FlipHorizontally?.value : FlipHorizontally} /* default: false */  isRaw={typeof FlipHorizontally === "object" && "isRaw" in FlipHorizontally && FlipHorizontally.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="FlipVertically" id={typeof FlipVertically === "object" && "id" in FlipVertically ? FlipVertically?.id : undefined} value={typeof FlipVertically === "object" && "value" in FlipVertically ? FlipVertically?.value : FlipVertically} /* default: false */  isRaw={typeof FlipVertically === "object" && "isRaw" in FlipVertically && FlipVertically.isRaw ? true : undefined} />
        </Component>
      );
    };
    