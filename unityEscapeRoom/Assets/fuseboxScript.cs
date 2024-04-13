using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class fuseboxScript : MonoBehaviour
{
    public Transform target;
    public float speed;
    private bool moving = false;
    private bool moving2 = false;
    public bool inFront = false;
    public float rotX;
    public float rotY;
    public float rotZ;
    private Vector3 originalPos;
    private bool canInteract = true;
    private Quaternion originalRot;
    private Vector3 newRot;
    public Vector3 fboxVector;
    public GameObject panelDoor;
    public GameObject mainKnob;
    public GameObject KnobSphere;
    public GameObject Dander;
    public GameObject Rings;
    // Start is called before the first frame update
    void Start()
    {
        originalPos = transform.position;
        originalRot = transform.rotation;
    //    originalRot = new Vector3(transform.rotation.x, transform.rotation.y, transform.rotation.z);
        GameObject.Find("fbox_Back_Button").GetComponent<Renderer>().enabled = false;
        panelDoor = GameObject.Find("Cup");
        mainKnob = GameObject.Find("Main Knob");
        mainKnob.GetComponent<Renderer>().enabled = false;
        KnobSphere = GameObject.Find("Sphere001");
        KnobSphere.GetComponent<Renderer>().enabled = false;
        Rings = GameObject.Find("Rings");
        Rings.GetComponent<Renderer>().enabled = false;
        Dander = GameObject.Find("Dander");
    }

    // Update is called once per frame
    void Update()
    {
        if(inFront && moving == false){
            GetComponent<BoxCollider>().enabled = false;
        }
        else{
            GetComponent<BoxCollider>().enabled = true;
        }
        
        MoveToFront();
        if (GameObject.Find("fbox_Back_Button").GetComponent<BackArrowScript>().backButtonClicked) {
            Debug.Log("Back button clicked again");
            if(inFront)
            {
                Debug.Log("Move back");
                if(moving2 == false){
                    moving2 = true;
                    inFront = false;
                }
            }
            MoveToOriginalPosition();  
        }
    }

    private void OnMouseDown() 
    {
        if(!inFront && canInteract && moving2 == false)
        {
            Debug.Log("Clicked1!");
            if(moving == false){
                moving = true;
                inFront = true;
            }
        }
    }

    void MoveToFront() {
        if(moving == true){
            mainKnob.GetComponent<Renderer>().enabled = true;
            KnobSphere.GetComponent<Renderer>().enabled = true;
            Rings.GetComponent<Renderer>().enabled = true;
            transform.position = Vector3.MoveTowards(transform.position, target.position + target.forward + fboxVector, speed);
            transform.right = target.position - target.position;
            if(FindObjectOfType<AudioManagerScript>() != null){
                FindObjectOfType<AudioManagerScript>().ClickedOn();
            }
            newRot = new Vector3(target.rotation.x + rotX, target.rotation.y + rotY, target.rotation.z + rotZ);
            transform.eulerAngles = newRot;
            if(transform.position == target.position + target.forward + fboxVector){
                moving = false;
                inFront = true;                
                
                GameObject.Find("fbox_Back_Button").GetComponent<Renderer>().enabled = true;
                panelDoor.GetComponent<Renderer>().enabled = false;
                Dander.GetComponent<Renderer>().enabled = false;
            }
            
        }   
    }

    void  MoveToOriginalPosition() {
        if(moving2 == true){
            Debug.Log("REACHED");
            transform.position = Vector3.MoveTowards(transform.position, originalPos, speed);
        //    transform.eulerAngles = originalRot;
            transform.rotation = originalRot;
            if(transform.position == originalPos){
                
                moving2 = false;
                inFront = false;
                GameObject.Find("fbox_Back_Button").GetComponent<BackArrowScript>().backButtonClicked = false;
                GameObject.Find("fbox_Back_Button").GetComponent<Renderer>().enabled = false;
                panelDoor.GetComponent<Renderer>().enabled = true;
                Dander.GetComponent<Renderer>().enabled = true;
                mainKnob.GetComponent<Renderer>().enabled = false;
                KnobSphere.GetComponent<Renderer>().enabled = false;
                Rings.GetComponent<Renderer>().enabled = false;
                //transform.eulerAngles = originalRot;    
            }

        
        }
    }

    public void DisableInteraction()
    {
        canInteract = false;
    }

    public void EnableInteraction()
    {
        canInteract = true;
    }
}
