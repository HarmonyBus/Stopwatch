package com.example.stopwatch.widget.widget;

import com.example.stopwatch.ResourceTable;
import ohos.aafwk.ability.AbilitySlice;
import ohos.aafwk.content.Intent;
import ohos.agp.components.Component;
import ohos.agp.components.ComponentContainer;
import ohos.agp.components.LayoutScatter;
import ohos.agp.components.Text;
import ohos.utils.zson.ZSONObject;

/**
 * Display an operation page used to show data of the immersion service widget.
 */
public class WidgetSlice extends AbilitySlice {
    @Override
    public void onStart(Intent intent) {
        super.onStart(intent);
        Component component = LayoutScatter.getInstance(this)
                .parse(ResourceTable.Layout_immersion_widget, null, false);
        Text text = (Text) component.findComponentById(ResourceTable.Id_text_hello);
        String params = intent.getStringParam("params");
        ZSONObject zsonObject = ZSONObject.stringToZSON(params);
        text.setText(zsonObject.getString("message"));
        super.setUIContent((ComponentContainer) component);
    }

    @Override
    public void onActive() {
        super.onActive();
    }

    @Override
    public void onForeground(Intent intent) {
        super.onForeground(intent);
    }
}
