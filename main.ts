input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
    basic.showIcon(IconNames.Happy)
    basic.showArrow(ArrowNames.East)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
basic.showIcon(IconNames.Ghost)
music.setVolume(82)
music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
