package com.example.stopwatch.widget.widget;

import com.example.stopwatch.widget.controller.FormController;
import ohos.aafwk.ability.AbilitySlice;
import ohos.aafwk.ability.ProviderFormInfo;
import ohos.aafwk.content.Intent;
import ohos.app.Context;

/**
 * The main class related to immersion service widget.
 * When adding an immersion card in launcher, it will display a graphic and text interface in form widget.
 * When clicking the immersion card, it will route to {@link WidgetSlice} and show a operation page used to
 * display data of the immersion card.
 * immersion card supports running in phone/tablet/wearable devices.
 */
public class WidgetImpl extends FormController {

    public WidgetImpl(Context context, String formName, Integer dimension) {
        super(context, formName, dimension);
    }

    @Override
    public ProviderFormInfo bindFormData() {
        return null;
    }

    @Override
    public void updateFormData(long formId, Object... vars) {
    }

    @Override
    public void onTriggerFormEvent(long formId, String message) {
    }

    @Override
    public Class<? extends AbilitySlice> getRoutePageSlice(Intent intent) {
        return WidgetSlice.class;
    }
}
