import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface TwitchChatDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_canvas?: member<any>;
_panel?: member<any>;
MaxMessages?: member<number>;
Interface?: member<any>;
_channelName?: member<any>;
_viewerCount?: member<any>;
_messagesRoot?: member<any>;
_messagesScrollRect?: member<any>;
_highlightPanel?: member<any>;
_highlightText?: member<any>;
_spriteSheet?: member<any>;
_fontCollection?: member<any>;
    }
    
    export function TwitchChatDialog(props: TwitchChatDialogInput){
      const { id, persistentId, updateOrder, Enabled,
_canvas,
_panel,
MaxMessages,
Interface,
_channelName,
_viewerCount,
_messagesRoot,
_messagesScrollRect,
_highlightPanel,
_highlightText,
_spriteSheet,
_fontCollection, } = props;
    
      return (
        <Component type="FrooxEngine.TwitchChatDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`} name="_canvas" id={typeof _canvas === "object" && "id" in _canvas ? _canvas?.id : undefined} value={typeof _canvas === "object" && "value" in _canvas ? _canvas?.value : _canvas} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosPanel]`} name="_panel" id={typeof _panel === "object" && "id" in _panel ? _panel?.id : undefined} value={typeof _panel === "object" && "value" in _panel ? _panel?.value : _panel} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="MaxMessages" id={typeof MaxMessages === "object" && "id" in MaxMessages ? MaxMessages?.id : undefined} value={typeof MaxMessages === "object" && "value" in MaxMessages ? MaxMessages?.value : MaxMessages} /* default: 0 */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.TwitchInterface]`} name="Interface" id={typeof Interface === "object" && "id" in Interface ? Interface?.id : undefined} value={typeof Interface === "object" && "value" in Interface ? Interface?.value : Interface} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_channelName" id={typeof _channelName === "object" && "id" in _channelName ? _channelName?.id : undefined} value={typeof _channelName === "object" && "value" in _channelName ? _channelName?.value : _channelName} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_viewerCount" id={typeof _viewerCount === "object" && "id" in _viewerCount ? _viewerCount?.id : undefined} value={typeof _viewerCount === "object" && "value" in _viewerCount ? _viewerCount?.value : _viewerCount} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_messagesRoot" id={typeof _messagesRoot === "object" && "id" in _messagesRoot ? _messagesRoot?.id : undefined} value={typeof _messagesRoot === "object" && "value" in _messagesRoot ? _messagesRoot?.value : _messagesRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.ScrollRect]`} name="_messagesScrollRect" id={typeof _messagesScrollRect === "object" && "id" in _messagesScrollRect ? _messagesScrollRect?.id : undefined} value={typeof _messagesScrollRect === "object" && "value" in _messagesScrollRect ? _messagesScrollRect?.value : _messagesScrollRect} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Image]`} name="_highlightPanel" id={typeof _highlightPanel === "object" && "id" in _highlightPanel ? _highlightPanel?.id : undefined} value={typeof _highlightPanel === "object" && "value" in _highlightPanel ? _highlightPanel?.value : _highlightPanel} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_highlightText" id={typeof _highlightText === "object" && "id" in _highlightText ? _highlightText?.id : undefined} value={typeof _highlightText === "object" && "value" in _highlightText ? _highlightText?.value : _highlightText} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.DynamicSpriteFont]`} name="_spriteSheet" id={typeof _spriteSheet === "object" && "id" in _spriteSheet ? _spriteSheet?.id : undefined} value={typeof _spriteSheet === "object" && "value" in _spriteSheet ? _spriteSheet?.value : _spriteSheet} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FontCollection]`} name="_fontCollection" id={typeof _fontCollection === "object" && "id" in _fontCollection ? _fontCollection?.id : undefined} value={typeof _fontCollection === "object" && "value" in _fontCollection ? _fontCollection?.value : _fontCollection} /* default: ID0 */  />
        </Component>
      );
    };
    