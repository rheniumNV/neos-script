import { member, Member, Component } from "../../../core";
    
    export interface DynamicSpriteFontInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
MaxSize?: member<number>;
Glyphs?: member<any>;
    }
    
    export function DynamicSpriteFont(props: DynamicSpriteFontInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
MaxSize,
Glyphs, } = props;
    
      return (
        <Component type="FrooxEngine.DynamicSpriteFont" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="MaxSize" id={typeof MaxSize === "object" && "id" in MaxSize ? MaxSize?.id : undefined} value={typeof MaxSize === "object" && "value" in MaxSize ? MaxSize?.value : MaxSize} /* default: 0 */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.DynamicSpriteFont+SpriteGlyph]`} name="Glyphs" id={typeof Glyphs === "object" && "id" in Glyphs ? Glyphs?.id : undefined} value={typeof Glyphs === "object" && "value" in Glyphs ? Glyphs?.value : Glyphs} /* default: FrooxEngine.SyncList`1[FrooxEngine.DynamicSpriteFont+SpriteGlyph] */  />
        </Component>
      );
    };
    