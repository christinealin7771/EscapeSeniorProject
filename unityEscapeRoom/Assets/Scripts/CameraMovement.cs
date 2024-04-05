using UnityEngine;
using UnityEngine.SceneManagement;
using System.Collections.Generic;
using NavKeypad;

public class MouseLookAround : MonoBehaviour
{
    float rotationX = 0f;
    float rotationY = 0f;

    private float sensitivity = 1.5f;
    public Vector3 initialRotation = new Vector3(0f, 180f, 0f); // Initial starting rotation

    Scene currentScene;
    // Reference to the clipboard script
    public ClipBoard_Script clipboardScript;
    public BookScript bookScript;
    public LaptopScript laptopScript;
    public KeyPadZoomScript keypadScript;
    public PaintingScript paintingScript;
    public PaletteScript paletteScript;
    public BowlscoreScript bowlscoreScript;
    public PrinterScript printerScript;
    public ClockScript clockScript;
    public NotebookScript notebookScript;
    public WireBoxScript wireboxScript;
    public MorseScript morseScript;
    public TVScript tvScript;
    public CaesarBookScript cBookScript;
    public CaesarPictureScript cPictureScript;
    public MusicBookScript mBookScript;
    public MusicSheetScript mChartScript;
    List<BackArrowScript> backArrowScripts = new List<BackArrowScript>();
    List<KeypadButton> keypadButtons = new List<KeypadButton>();

    public bool cameraPaused = false;

    void Start()
    {
        // Set the initial rotation
        rotationX = initialRotation.x;
        rotationY = initialRotation.y;
        transform.localEulerAngles = initialRotation;

        clipboardScript = FindObjectOfType<ClipBoard_Script>();
        bookScript = FindObjectOfType<BookScript>();
        laptopScript = FindObjectOfType<LaptopScript>();
        keypadScript = FindObjectOfType<KeyPadZoomScript>();
        paintingScript = FindObjectOfType<PaintingScript>();
        paletteScript = FindObjectOfType<PaletteScript>();
        bowlscoreScript = FindObjectOfType<BowlscoreScript>();
        printerScript = FindObjectOfType<PrinterScript>();
        clockScript = FindObjectOfType<ClockScript>();
        notebookScript = FindObjectOfType<NotebookScript>();
        wireboxScript = FindObjectOfType<WireBoxScript>();
        morseScript = FindObjectOfType<MorseScript>();
        tvScript = FindObjectOfType<TVScript>();
        cBookScript = FindObjectOfType<CaesarBookScript>();
        cPictureScript = FindObjectOfType<CaesarPictureScript>();
        mBookScript = FindObjectOfType<MusicBookScript>();
        mChartScript = FindObjectOfType<MusicSheetScript>();
        BackArrowScript[] backArrowScriptArray = FindObjectsOfType<BackArrowScript>();
        backArrowScripts.AddRange(backArrowScriptArray);
        KeypadButton[] keypadButtonArray = FindObjectsOfType<KeypadButton>();
        keypadButtons.AddRange(keypadButtonArray);

    }

    void Update()
    {
        if (!cameraPaused)
        {
            currentScene = SceneManager.GetActiveScene();

            // Check if the clipboard is not in front of the camera
            if (clipboardScript != null && clipboardScript.inFront)
            {
                rotationX = initialRotation.x;
                rotationY = initialRotation.y;
                transform.localEulerAngles = initialRotation;

                paletteScript.DisableInteraction();
                bowlscoreScript.DisableInteraction();
                printerScript.DisableInteraction();
                keypadScript.DisableInteraction();
            }
            else if (bookScript != null && bookScript.inFront)
            {
                rotationX = initialRotation.x;
                rotationY = initialRotation.y;
                transform.localEulerAngles = initialRotation;

                laptopScript.DisableInteraction();
                paintingScript.DisableInteraction();
                keypadScript.DisableInteraction();
            }
            else if (laptopScript != null && laptopScript.inFront)
            {
                rotationX = initialRotation.x;
                rotationY = initialRotation.y;
                transform.localEulerAngles = initialRotation;

                bookScript.DisableInteraction();
                paintingScript.DisableInteraction();
                keypadScript.DisableInteraction();
            }
            else if (keypadScript != null && keypadScript.inFront)
            {
                rotationX = initialRotation.x;
                rotationY = initialRotation.y;
                transform.localEulerAngles = initialRotation;

                if (currentScene.name == "Room 1.1 - Marston")
                {
                    bookScript.DisableInteraction();
                    laptopScript.DisableInteraction();
                    paintingScript.DisableInteraction();
                }
                else if (currentScene.name == "Room 2.1 - Reitz Union")
                {
                    clipboardScript.DisableInteraction();
                    paletteScript.DisableInteraction();
                    bowlscoreScript.DisableInteraction();
                    printerScript.DisableInteraction();
                }
                else if (currentScene.name == "Room 3 - Southwest Rec")
                {
                    clockScript.DisableInteraction();
                    notebookScript.DisableInteraction();
                }
                else if(currentScene.name == "Room 4 - Malachowsky Hall"){
                    morseScript.DisableInteraction();
                    wireboxScript.DisableInteraction();
                    tvScript.DisableInteraction();
                }
                else if(currentScene.name == "Room 5 - Century Tower"){
                    cBookScript.DisableInteraction();
                    cPictureScript.DisableInteraction();
                    mBookScript.DisableInteraction();
                    mChartScript.DisableInteraction();
                }
            }
            else if (paintingScript != null && paintingScript.inFront)
            {
                rotationX = initialRotation.x;
                rotationY = initialRotation.y;
                transform.localEulerAngles = initialRotation;

                bookScript.DisableInteraction();
                laptopScript.DisableInteraction();
                keypadScript.DisableInteraction();
            }
            else if (paletteScript != null && paletteScript.inFront)
            {
                rotationX = initialRotation.x;
                rotationY = initialRotation.y;
                transform.localEulerAngles = initialRotation;

                clipboardScript.DisableInteraction();
                bowlscoreScript.DisableInteraction();
                printerScript.DisableInteraction();
                keypadScript.DisableInteraction();
            }
            else if (bowlscoreScript != null && bowlscoreScript.inFront)
            {
                rotationX = initialRotation.x;
                rotationY = initialRotation.y;
                transform.localEulerAngles = initialRotation;

                clipboardScript.DisableInteraction();
                paletteScript.DisableInteraction();
                printerScript.DisableInteraction();
                keypadScript.DisableInteraction();
            }
            else if (printerScript != null && printerScript.inFront)
            {
                rotationX = initialRotation.x;
                rotationY = initialRotation.y;
                transform.localEulerAngles = initialRotation;

                clipboardScript.DisableInteraction();
                paletteScript.DisableInteraction();
                bowlscoreScript.DisableInteraction();
                keypadScript.DisableInteraction();
            }
            else if (clockScript != null && clockScript.inFront)
            {
                rotationX = initialRotation.x;
                rotationY = initialRotation.y;
                transform.localEulerAngles = initialRotation;

                notebookScript.DisableInteraction();
                keypadScript.DisableInteraction();
            }
            else if (notebookScript != null && notebookScript.inFront)
            {
                rotationX = initialRotation.x;
                rotationY = initialRotation.y;
                transform.localEulerAngles = initialRotation;

                clockScript.DisableInteraction();
                keypadScript.DisableInteraction();
            }
            else if (wireboxScript != null && wireboxScript.inFront)
            {
                rotationX = initialRotation.x;
                rotationY = initialRotation.y;
                transform.localEulerAngles = initialRotation;
                
            //    clockScript.DisableInteraction();
            //    keypadScript.DisableInteraction();
                morseScript.DisableInteraction();
                tvScript.DisableInteraction();
            }
            else if (morseScript != null && morseScript.inFront)
            {
                rotationX = initialRotation.x;
                rotationY = initialRotation.y;
                transform.localEulerAngles = initialRotation;
                
            //    clockScript.DisableInteraction();
            //    keypadScript.DisableInteraction();
                tvScript.DisableInteraction();
                wireboxScript.DisableInteraction();
            }
            else if(tvScript != null && tvScript.inFront){
                rotationX = initialRotation.x;
                rotationY = initialRotation.y;
                transform.localEulerAngles = initialRotation;
                wireboxScript.DisableInteraction();
                morseScript.DisableInteraction();
            }
            else if(cBookScript != null && cBookScript.inFront){
                rotationX = initialRotation.x;
                rotationY = initialRotation.y;
                transform.localEulerAngles = initialRotation;
                cPictureScript.DisableInteraction();
                mBookScript.DisableInteraction();
                mChartScript.DisableInteraction();
            }
            else if(cPictureScript != null && cPictureScript.inFront){
                rotationX = initialRotation.x;
                rotationY = initialRotation.y;
                transform.localEulerAngles = initialRotation;
                cBookScript.DisableInteraction();
                mBookScript.DisableInteraction();
                mChartScript.DisableInteraction();
            }
            else if(mBookScript != null && mBookScript.inFront){
                rotationX = initialRotation.x;
                rotationY = initialRotation.y;
                transform.localEulerAngles = initialRotation;
                cBookScript.DisableInteraction();
                cPictureScript.DisableInteraction();
                mChartScript.DisableInteraction();
            }
            else if(mChartScript != null && mChartScript.inFront){
                rotationX = initialRotation.x;
                rotationY = initialRotation.y;
                transform.localEulerAngles = initialRotation;
                cBookScript.DisableInteraction();
                cPictureScript.DisableInteraction();
                mBookScript.DisableInteraction();
            }
            else
            {
                rotationY += Input.GetAxis("Mouse X") * sensitivity;
                rotationX += Input.GetAxis("Mouse Y") * -1 * sensitivity;

                // Clamp vertical rotation to prevent flipping
                rotationX = Mathf.Clamp(rotationX, -90f, 90f);

                transform.localEulerAngles = new Vector3(rotationX, rotationY, 0);
                if (currentScene.name == "YourSceneName")
                {
                    // Do something specific for this scene
                    Debug.Log("You are in the YourSceneName scene.");
                }

                if (currentScene.name == "Room 1.1 - Marston")
                {
                    bookScript.EnableInteraction();
                    laptopScript.EnableInteraction();
                    paintingScript.EnableInteraction();
                }
                else if (currentScene.name == "Room 2.1 - Reitz Union")
                {
                    clipboardScript.EnableInteraction();
                    paletteScript.EnableInteraction();
                    bowlscoreScript.EnableInteraction();
                    printerScript.EnableInteraction();
                }
                else if (currentScene.name == "Room 3 - Southwest Rec")
                {
                    clockScript.EnableInteraction();
                    notebookScript.EnableInteraction();
                }
                else if(currentScene.name == "Room 4 - Malachowsky Hall"){
                    morseScript.EnableInteraction();
                    wireboxScript.EnableInteraction();
                    tvScript.EnableInteraction();
                }
                else if(currentScene.name == "Room 5 - Century Tower"){
                    cBookScript.EnableInteraction();
                    cPictureScript.EnableInteraction();
                    mBookScript.EnableInteraction();
                    mChartScript.EnableInteraction();
                }
                keypadScript.EnableInteraction();
            }
        }
        else
        {
            DisableAllInteractions();
        }
    }

    public void ToggleCameraPause(bool pause)
    {
        cameraPaused = pause;
        if (cameraPaused)
        {
            DisableAllInteractions();

            // Disable interaction for all keypad buttons when pausing
            foreach (KeypadButton keypadButton in keypadButtons)
            {
                if (keypadButton != null)
                {
                    keypadButton.DisableInteraction();
                }
            }

            // Disable interaction for all back arrow scripts when pausing
            foreach (BackArrowScript backArrowScript in backArrowScripts)
            {
                if (backArrowScript != null)
                {
                    backArrowScript.DisableInteraction();
                }
            }
        }
        else
        {
            // Enable interaction for all keypad buttons when unpausing
            foreach (KeypadButton keypadButton in keypadButtons)
            {
                if (keypadButton != null)
                {
                    keypadButton.EnableInteraction();
                }
            }

            // Enable interaction for all back arrow scripts when unpausing
            foreach (BackArrowScript backArrowScript in backArrowScripts)
            {
                if (backArrowScript != null)
                {
                    backArrowScript.EnableInteraction();
                }
            }
        }
    }

    void DisableAllInteractions()
    {
        if (clipboardScript != null)
            clipboardScript.DisableInteraction();
        if (bookScript != null)
            bookScript.DisableInteraction();
        if (laptopScript != null)
            laptopScript.DisableInteraction();
        if (keypadScript != null)
            keypadScript.DisableInteraction();
        if (paintingScript != null)
            paintingScript.DisableInteraction();
        if (paletteScript != null)
            paletteScript.DisableInteraction();
        if (bowlscoreScript != null)
            bowlscoreScript.DisableInteraction();
        if (printerScript != null)
            printerScript.DisableInteraction();
        if (clockScript != null)
            clockScript.DisableInteraction();
        if (notebookScript != null)
            notebookScript.DisableInteraction();
        if (wireboxScript != null)
            wireboxScript.DisableInteraction();
        if (morseScript != null)
            morseScript.DisableInteraction();
        if (tvScript != null)
            tvScript.DisableInteraction();
        if (cPictureScript != null)
            cPictureScript.DisableInteraction();
        if (cBookScript != null)
            cBookScript.DisableInteraction();
        if (mBookScript != null)
            mBookScript.DisableInteraction();
        if (mChartScript != null)
            mChartScript.DisableInteraction();
    }
}